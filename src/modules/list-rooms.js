const db = require("../db/index.js");

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 5;
const DEFAULT_SORT_BY = "id";
const DEFAULT_SORT_ORDER = "desc";

const listRooms = async ({
  q,
  filters: { floor, for_stuff } = {},
  page: { offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT } = {},
  sort: { by = DEFAULT_SORT_BY, order = DEFAULT_SORT_ORDER } = {},
}) => {
  try {
    console.log(q);
    let query = db("rooms").select("*");

    if (floor !== undefined) query = query.where({ floor });

    if (typeof for_stuff === "boolean") query = query.where({ for_stuff });
  
    if (q) {
      query = query.whereILike("name", `%${q}%`);
    }
    const total = await query.clone().count().groupBy("id");
    query = query.orderBy(by.toLowerCase(), order).offset(offset).limit(limit);

    const rooms = await query;

    return {
      list: rooms,
      offset,
      limit,
      total: total.length,
    };
  } catch (error) {
    throw new Error( error);
  }
};

module.exports = listRooms
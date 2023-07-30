const db = require("../db/index.js");

const addRoom = async (payload) => {
  const result = await db('rooms').insert(payload).returning('*');
  return result[0];
};
module.exports = addRoom;
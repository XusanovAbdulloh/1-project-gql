const db = require('../db/index.js');

const showRoom = async ({ id }) => {
  const data= await db('rooms').where({ id }).first();
  if (!data) {
    throw new Error(' not found');
  }

  return data;
};
module.exports =showRoom
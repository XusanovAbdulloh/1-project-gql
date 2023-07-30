const db = require('../db/index.js');

const removeRoom = async ({ id }) => {
  const post = await db('rooms').where({ id }).first();

  if (!post) {
    throw new Error(' not found');
  }

  return (await db('rooms').where({ id }).delete().returning('*'))[0];
};

module.exports = removeRoom
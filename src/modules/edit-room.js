const db = require('../db/index.js');

 const editRoom = async ({ id, ...changes }) => {
  const post = await db('rooms').where({ id }).first();

  if (!post) {
    throw new Error('not found');
  }

  return (await db('rooms').where({ id }).update(changes).returning('*'))[0];
};

module.exports = editRoom
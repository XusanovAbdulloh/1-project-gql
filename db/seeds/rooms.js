/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert([
    { name: "github", floor: 1, for_stuff: false },
    { name: "microsoft", floor: 2, for_stuff: false },
    { name: "aliexpress", floor: 3, for_stuff: false },
    { name: "faktor", floor: 1, for_stuff: false },
    { name: "facebook", floor: 2, for_stuff: false },
    { name: "apple", floor: 3, for_stuff: false },
    { name: "instagram", floor: 2, for_stuff: false },
    { name: "ebay", floor: 1, for_stuff: false },
    { name: "stufs", floor: 2, for_stuff: true },
    { name: "stufsss", floor: 3, for_stuff: true }
  ]);
};

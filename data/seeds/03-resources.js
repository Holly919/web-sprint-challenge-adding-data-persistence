
exports.seed = function(knex) {
      return knex('resources').insert([
        { name: "Computer" },
        { name: "TK" },
        { name: "Veggies" },
        { name: "Brine Ingredients" },
        { name: "Wood" },
        { name: "Tools" }
      ])
};

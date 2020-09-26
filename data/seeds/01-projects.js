exports.seed =  function(knex, Promise) {
  return knex('projects').insert([
        { name: "Pass this sprint challenge"},
        { name: "Make pickles"},
        { name: "Build new desk"}
      ])
};

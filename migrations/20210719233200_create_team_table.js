
exports.up = function(knex) {
  return knex.schema.createTable('teams', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('drivers').notNullable();
      table.integer('points');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};

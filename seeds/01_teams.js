
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, name: 'RedBull', drivers: 'Max Verstappen, Sergio Perez', points: 289},
        {id: 2, name: 'Mercedes', drivers: 'Lewis Hamilton, Valtteri Bottas', points: 285},
        {id: 3, name: 'McLaren', drivers: 'Lando Norris, Daniel Ricciardo', points: 163}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
      {
        VIN: '1254fks45321', 
        make:'Honda', 
        model:'Civic', 
        mileage:10, 
        transmission: 'v6', 
        title:'clean'
      },

      {
       VIN: '12564jlkjfd15', 
       make:'Ford',
       model:'F150', 
       mileage:102547, 
       transmission: null, 
       title: null
      },
    ])
  });
};

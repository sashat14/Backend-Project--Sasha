
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function(tbl){
        tbl.increments().unique().notNullable()
        tbl.string('title')
        tbl.text('body').notNullable()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('notes')
};

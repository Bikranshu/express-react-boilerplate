/**
 * Up users table.
 *
 * @param  {object} knex
 *
 */
exports.up = function(knex) {
    console.log('generating users table');
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().unsigned();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.bool('status').default(false);
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
};

/**
 * Drop users table.
 *
 * @param  {object} knex
 *
 */
exports.down = function(knex) {
    console.log('dropping users table');
    return knex.schema.dropTable('users');
};
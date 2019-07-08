'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCrosswordSchema extends Schema {
  up () {
    this.create('user_crosswords', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('crossword_id').unsigned().references('id').inTable('crosswords')
      table.boolean('is_finished').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_crosswords')
  }
}

module.exports = UserCrosswordSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('crossword_id').unsigned().references('id').inTable('crosswords')
      table.integer('number').unsigned()
      table.enu('type', ['mendatar','menurun'])
      table.string('question', 80).notNullable()
      table.string('answer', 20).notNullable()
      table.boolean('is_clue').notNullable()
      table.string('indexes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema

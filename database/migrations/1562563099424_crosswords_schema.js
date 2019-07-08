'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrosswordsSchema extends Schema {
  up () {
    this.create('crosswords', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('total_columns').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('crosswords')
  }
}

module.exports = CrosswordsSchema

'use strict'

/*
|--------------------------------------------------------------------------
| AnswerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AnswerSeeder {
  async run () {
    const crosswords = await Factory
   .model('App/Models/Answer')
   .createMany(6)
  }
}

module.exports = AnswerSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| CrosswordSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CrosswordSeeder {
  async run () {
    const crosswords = await Factory
   .model('App/Models/Crossword')
   .createMany(3)
  }
}

module.exports = CrosswordSeeder

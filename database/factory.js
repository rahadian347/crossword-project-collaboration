'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
    return {
      username: ['0','aden', 'ariandy', 'ibrahim', 'januar', 'rahadian'][i],
      email: ['0', 'aden@x.com', 'ariandy@x.com', 'ibrahim@x.com', 'januar@x.com', 'rahadian@x.com'][i],
      password: '0',
    }
  })

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

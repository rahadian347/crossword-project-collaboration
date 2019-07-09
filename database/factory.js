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

Factory.blueprint('App/Models/Crossword', async (faker, i, data) => {
    return {
        name: ['Nama-nama kota','Nama-nama makanan', 'Nama-nama nabi'][i],
        total_columns: 144
    }
})

Factory.blueprint('App/Models/Answer', async (faker, i, data) => {
    return {
        crossword_id: [3,2,1][i],
        number: [1,2,3,4,5,6,7,8,9,10][i],
        question:['nabi yang dimakan paus','nabi pertama','nabi yang tidak mempan dibakar'][i],
        is_clue:[false,false,false,false,false,false],
        answer:['yunus AS','adam AS','Ibrahim AS'],
        indexes:["1,2,3,4,5","1,2,6,4,9","1,2,3,8,4","1,5,3,7,5","1,2,3,3,5","1,2,3,3,9"]
    }
})  


// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

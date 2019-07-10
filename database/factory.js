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
        total_columns: [144, 64, 25][i]
    }
})

// Factory.blueprint('App/Models/Answer', async (faker, i, data) => {
//     return await {
//         number: [1,2,3,4][i],
//         question: ['Manusia Pertama','Diuji dengan sakit kulit','Membelah Laut Merah','Memiliki mukjizat menghidupkan orang mati'][i],
//         answer: ['ADAM', 'AYUB', 'MUSA', 'ISA'][i],
//         is_clue: false,
//         indexes: ['0,1,2,3',
//                   '0,5,10,15',
//                   '3,8,13,18',
//                   '12,13,14'][i]
//     }
// })

Factory.blueprint('App/Models/Answer', async (faker, i, data) => {
    return await {
        number: [1,2,3,4,5][i],
        type: ['menurun','mendatar','menurun','mendatar','menurun'][i],
        question: ['Gempa 2018','Hampir menjadi ibu kota di era Soekarno','Pantai Sanur','Coto','Kota Kelahiran Icuk Sugiarto'][i],
        answer: ['PALU', 'PALANGKARAYA', 'DENPASAR', 'MAKASSAR', 'SURAKARTA'][i],
        is_clue: false,
        indexes: ['14,26,38,50',
                  '36,37,38,39,40,41,42,43,44,45,46,47',
                  '16,28,40,52,64,76,88,100',
                  '72,73,74,75,76,77,78,79',
                  '7,19,31,43,55,67,79,91,103'][i]
    }
})

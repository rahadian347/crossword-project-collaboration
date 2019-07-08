'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crossword extends Model {
    answers () {
        return this.hasMany('App/Models/Answers')
    }
    usercrosswords () {
        return this.hasMany('App/Models/UserCrosswords')
    }
}

module.exports = Crossword

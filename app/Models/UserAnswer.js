'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserAnswer extends Model {
    answers () {
        return this.belongsTo('App/Models/Answers')
    }
    users () {
        return this.belongsTo('App/Models/Users')
    }
}

module.exports = UserAnswer

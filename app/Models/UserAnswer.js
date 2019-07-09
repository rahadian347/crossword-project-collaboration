'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserAnswer extends Model {
    answers () {
        return this.belongsTo('App/Models/Answer','answer_id','id')
    }
    users () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = UserAnswer

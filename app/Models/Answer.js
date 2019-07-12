'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    crosswords () {
        return this.belongsTo('App/Models/Crossword')
    }
    userAnswers () {
        return this.hasMany('App/Models/UserAnswer','id','answer_id')
    }
}

module.exports = Answer

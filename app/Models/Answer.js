'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    crosswords () {
        return this.belongsTo('App/Models/Crosswords')
    }
    useranswers () {
        return this.hasMany('App/Models/UserAnswers')
    }
}

module.exports = Answer

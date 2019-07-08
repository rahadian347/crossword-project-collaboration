'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserCrossword extends Model {
    users () {
        return this.belongsTo('App/Models/Users')
    }
    crosswords () {
        return this.belongsTo('App/Models/Crosswords')
    }
}

module.exports = UserCrossword

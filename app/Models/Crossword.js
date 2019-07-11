'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crossword extends Model {
    answers () {
        return this.hasMany('App/Models/Answer')
    }
    usercrosswords () {
        return this.hasMany('App/Models/UserCrossword')
    }

    users() {
    	return this.belongsToMany('App/Models/User').pivotTable('user_crosswords')
    }
}

module.exports = Crossword

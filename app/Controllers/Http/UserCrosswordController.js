'use strict'

const Answer = use('App/Models/Answer')
 
class UserCrosswordController {
   
  async update ({ params, request, response }) {
    try{
      // const answerExist = await Answer.query().where('is_clue',1).fetch()

      const answerExists = await Answer.findBy('is_clue', 1)
      if (answerExists) {
         console.log('err')
      }


    }
    catch(e){
      console.log(e)
    }  
  }

}

module.exports = UserCrosswordController

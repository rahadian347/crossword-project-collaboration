'use strict'

const Answer = use('App/Models/Answer')
const UserAnswer = use('App/Models/UserAnswer')

class UserAnswerController {

  async index ({ request, response, params }) {

      try{
        const answer = await Answer.query().where('crossword_id', params.id).fetch()

        return response.status(201).send({data:answer})
      }
      catch(error){
         return response.send(error)
      }
          
  }

  async store ({ request, response }){
    const data = request.only(['user_id','answer_id','answer'])

    const useranswer = await UserAnswer.create(data)
    
    return response.status(201).json({
        'message': 'success'
    })
   
  }

  async update ({request, response}){
    
  }
}

module.exports = UserAnswerController

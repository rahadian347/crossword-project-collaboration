'use strict'

const Answer = use('App/Models/Answer')
const UserAnswer = use('App/Models/UserAnswer')

class UserAnswerController {

  async index ({ request, response, params }) {

      try{
        const answer = await Answer.query().where('crossword_id', params.id).fetch()

        return response.status(200).send({data:answer})
      }
      catch(error){
         return response.send(error)
      }
          
  }

  async store ({ request, response }){
    let data = request.collect(['user_id', 'answer_id', 'answer'])

    const useranswer = await UserAnswer.createMany(data)
    
    return response.status(201).json({
        message: 'success',
        data: useranswer
    })
   
  }

  async update ({request, response, params}){
    const data = request.only(['user_id','answer_id','answer'])

    const useranswer = await UserAnswer.query().where('id',params.id).update(data)

    return response.status(200).json({
      message: 'success',
      data: {
        'user_id': data.user_id,
        'answer_id': data.answer_id,
        'answer': data.answer
     }
    })
  }
}

module.exports = UserAnswerController

'use strict'

const Logger=use('Logger')
const UserCrossword=use('App/Models/UserCrossword')
class AnswerController {
  async index ({ request, response, view }) {
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }
  
  async show ({ params, request, response, view }) {
    const data=await request.data.toJSON()
    let wrong=[]
    const {crossword_id,user_id}=params
    for (let index = 0; index < data.length; index++) {
      if(data[index].userAnswers[0].answer != data[index].answer){
        wrong.push(data[index])
      }
    }
    if(wrong.length > 0){
      response.status(200).json({
        msg:'Masih Ada Yang Salah',
        data:wrong
      })
    }else {
      const apa=await UserCrossword.query().where({crossword_id,user_id}).update({is_finished:1})
      response.status(200).json({
        msg:"Yeay Benar Semuasda!",
      }) 
    }
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AnswerController

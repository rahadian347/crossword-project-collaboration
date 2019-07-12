'use strict'

const Answer = use('App/Models/Answer')
const UserAnswer = use('App/Models/UserAnswer')

class UserAnswerController {

  async index ({ request, response, params }) {
    response.json('asdasdadads')
    const {user_id}=params
      try{
        const answer = await UserAnswer.query().where('user_id', user_id)
                            .setHidden(['created_at','updated_at'])
                            .with('answers',builder => {
                              builder.setVisible(['indexes'])
                            })
                            .fetch()
        return response.status(200).send({data:answer})
      }
      catch(error){
         return response.send(error)
      }
          
  }

  async store ({ request, response }){
    response.json('asdasdadads')
    // let data = request.collect(['user_id', 'answer_id', 'answer'])
  //   let data=request.post()
  // const {user_id,answer,answer_id}=data
  //   // response.status(200).json(
  //   //   {
  //   //     msg:'success',
  //   //     data
  //   //   }
  //   // ) 
  //   try{
  //   const checkUserAnswer= await UserAnswer.query().update('answer','wakwaw')   
  //     // const oldUserAnswer=new UserAnswer()
  //     // oldUserAnswer.user_id=user_id
  //     // oldUserAnswer.answer=answer
  //     // oldUserAnswer.answer_id=answer_id

  //     // const saveUserAnswer=await oldUserAnswer.save()
  //     if(checkUserAnswer){
  //       response.status(200).json(
  //         {
  //           msg:'success',
  //           data
  //         }
  //       ) 
  //     }else{
  //       // const answer=await UserAnswer.create(data)
  //       response.status(200).json({
  //         msg:'sukses',
  //         answer,
  //         data
  //       })
  //     }
  //   }catch(e){
  //     console.log(e)
  //     return e
  //   }

    
  //   // return response.status(201).json({
  //   //     message: 'success',
  //   //     data: useranswer
  //   // })
   
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

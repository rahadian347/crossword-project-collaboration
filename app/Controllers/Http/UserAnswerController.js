'use strict'

const Answer = use('App/Models/Answer')
const UserAnswer = use('App/Models/UserAnswer')
const Database=use('Database')
class UserAnswerController {

  async index ({ request, response, params }) {
    response.json('asdasdadads')
    const {user_id}=params
      try{
        const answer = await UserAnswer.query().where({user_id})
                            .setHidden(['created_at','updated_at'])
                            .with('answers',builder => {
                              builder.setVisible(['indexes']).with('crosswords')
                            })
                            .fetch()
        return response.status(200).send({data:answer})
      }
      catch(error){
         return response.send(error)
      }
          
  }

  async store ({ request, response,params}){
    const {user_id}=params
    let body=request.post()
    let numm=[]
    let words=[]
    let item=body.data
    item.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0))
    let dataFinal=[]

    item.map((data,index)=> {
      if(!numm.includes(data.answerId)){
        numm.push(data.answerId)
      }
    })

    numm.map((data,index)=> {
      item.map((child,index)=> {
        if(data === child.answerId)
          words.push(child.data)
      })
      dataFinal.push({answer:words.toString().replace(/,/g,''),answer_id:data})
      words=[]
    })

    try {
      const userAnswers= await UserAnswer.query().fetch()
      dataFinal.map(async(data,index) => {
        let {answer,answer_id}=data
        let result= userAnswers.toJSON().filter((ansData,ansIndex) => {
          if(data.answer_id === ansData.answer_id){
            return true
          }
        })
        if(result.length > 0){
          let updateAnswer=await Database.table('user_answers').where({answer_id:data.answer_id,user_id}).update('answer',data.answer)
          console.log('updated gan')
        
        }else {
          let updateAnswer=await UserAnswer.create({
            answer,
            user_id,
            answer_id
          }) 
          console.log('inserted gan')
        }
      })

      response.status(201).json({
        msg:'succes update'
      })

    }catch(e){
      return e
    }


  }

  // if()/*/
  
}

module.exports = UserAnswerController

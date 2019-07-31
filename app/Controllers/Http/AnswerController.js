'use strict'

const UserCrossword=use('App/Models/UserCrossword')
const Answer=use('App/Models/Answer')
const UserAnswer=use('App/Models/UserAnswer')
const Database=use('Database')
class AnswerController {
  async index ({ request,params, response, view }) {
    const {crossword_id}=params
    try{
      const getAll= await Answer.query().where({crossword_id})
                          .with('crosswords')
                          .setHidden(['created_at','updated_at'])
                          .fetch()

      if(getAll.toJSON().length !== 0){
        response.status(200).json(
          {
            msg:'berhasil amnbil data',
            data:getAll
          }
        ) 
      }else {
        response.status(200).json({msg:'data tidak ditemukan'})
      }
    }catch(e){
      response.status(404).json({msg:'mau ngapain sih?'})
    }
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
    const answers=await request.data.toJSON()
    // const crossswordName=await request.crossswordName.toJSON()
    const body=request.post()
    let wrong=[]
    const {crossword_id,user_id}=params
    let word
    let answerIndex
    let a=[]
    let numbers
    let indexes=[]
    const userAnswers= await UserAnswer.query().fetch()

    console.log('ini awal')
    
    // generate kunci jawaban
    answers.map((item,mainIndex)=> {
        console.log('ini mapp')
        word=item.answer.split("")
        answerIndex=item.indexes.split(",")
        word.map((frag,wordIndex)=> {
            a.push({data:word[wordIndex],index:parseInt(answerIndex[wordIndex]),answerId:item.id})
        })
    })

    //check kj
    let hh=body.data.filter((main,animalIndex) => {
        let done=false
        const {index,number}=main
        a.map((item,indexe) => {
            if(JSON.stringify(item) === JSON.stringify(main)){
                done=true
                return true
            }
        })
        if (done){
            return true
        }else {
            wrong.push(index)
        }
    })
    
    //update db
    let numm=[]
    let words=[]
    let item=body.data
    item.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0))
    let dataFinal=[]
    let aaf=item.filter((data,index)=> {
      if(!numm.includes(data.answerId)){
        numm.push(data.answerId)
      }
    })
    numm.map((data,index)=> {
      item.filter((child,index)=> {
        if(data === child.answerId)
          words.push(child.data)
      })
      dataFinal.push({answer:words.toString().replace(/,/g,''),answer_id:data})
      words=[]
    })

    let ppp=[]
    let ooo=dataFinal.filter(async(data,index) => {
      let {answer,answer_id}=data
      let result= userAnswers.toJSON().filter((ansData,ansIndex) => {
        if(data.answer_id === ansData.answer_id){
          return true
        }
      })
      if(result.length > 0){
        let updateAnswer=await Database.table('user_answers').where({answer_id:data.answer_id,user_id}).update('answer',data.answer)
      
      }else {
        let updateAnswer=await UserAnswer.create({
          answer,
          user_id,
          answer_id
        }) 
      }
    })

    //create resp
    if(hh.length === a.length){
      const apa=await UserCrossword.query().where({crossword_id,user_id}).update({is_finished:1})
      response.json({
        msg:'benar semua',
        isFinished:true
      })
    }else {
      response.json({
          msg:'salah',
          data:wrong,
          isFinished:false
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

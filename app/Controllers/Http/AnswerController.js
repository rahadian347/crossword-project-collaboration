'use strict'

const UserCrossword=use('App/Models/UserCrossword')
const Answer=use('App/Models/Answer')

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
    const data=await request.data.toJSON()
    // const crossswordName=await request.crossswordName.toJSON()
    const body=request.post()
    let wrong=[]
    const {crossword_id,user_id}=params

    let word
    let answerIndex
    let a=[]
    let numbers
    let indexes=[]

    console.log('ini awal')
    
    //generate kunci jawaban
    data.map((item,mainIndex)=> {
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


    if(hh.length === a.length){
        const apa=await UserCrossword.query().where({crossword_id,user_id}).update({is_finished:1})
        response.json('benar semua')
    }else {
        response.json({
            msg:'salah',
            data:wrong
        })
    } 

  // let numm=[]
  // let item=mainData
  // let dataFinal=[]
  // let selectNum=item.filter((data,index)=> {
  //   if(numm.includes(data.number)){
  //     numm.push(data.number)
  //   }
  // })
  // let finalData=selectNum.filter((data,index)=> {
  //   item.filter((child,index)=> {
  //     if(data.number === child.number)
  //       word.push(child.val)
  //   })
  //   dataFinal.push({answer:word,answer_id:data.answer_id})
  //   word=[]
  // })

  // data.map(data => {
  //   const update=await userAnswers.query().insert({answer_id,user_id,answer:finalData})  
  // })
  

  // const update=userAnswers.query().whereNot({answer_id,user_id,answer})



  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AnswerController

'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Answer=use('App/Models/Answer')
class CheckAnswer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,params,response }, next) {
    const {crossword_id,user_id}=params
    try{
      const data=await Answer.query().where('crossword_id',crossword_id).with('userAnswers',builder => {
        builder.where('user_id',user_id).setHidden(['created_at','updated_at'])
      }).setHidden(['created_at','updated_at','is_clue']).fetch()

      if(data.toJSON().length === 0){
        request.data=data
        await next()
      }else{
        response.status(404).json({
          msg:'data tidak ditemukan'
        })
      }
    }
    catch(err){
      response.json(err)
    }
    // response.json({msg:crossword_id})
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = CheckAnswer

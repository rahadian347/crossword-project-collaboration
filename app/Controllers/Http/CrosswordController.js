'use strict'

 const Crossword = use('App/Models/Crossword') 

class CrosswordController {
  async index ({ request, response }) {
    try{
      const userCrossword = await Crossword.query().with('usercrosswords', (builder) => {
        builder.where('is_finished', 0).setVisible(['is_finished'])
      }).fetch()
      
      return response.status(201).send({data:userCrossword})
    }
    catch(err){
      return response.status(err.status).send(err)
    }
  }

}

module.exports = CrosswordController

'use strict'

 const Crossword = use('App/Models/Crossword') 

class CrosswordController {
  async index ({ request, response,params,auth }) {
    try{
      const user = await auth.getUser()
      console.log( user)
      const userCrossword = await Crossword.query()
                                          .with('usercrosswords', (builder) => {
                                            builder.where('user_id',user.id).setVisible(['is_finished'])
                                          }).fetch()
                                          
      return response.status(201).send({data:userCrossword})
    }
    catch(err){
      console.log(err)
      return response.status(err.status).send(err)
    }
  }

  async store ({request, response}) {
    const data = request.all()
    try{
      const Crossword = await Crossword.findOrCreate({user_id : data.user_id},
      {
        user_id : data.user_id,
        
      })
    }catch(e){

    }
  }

}

module.exports = CrosswordController

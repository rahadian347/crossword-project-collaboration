'use strict'

const User = use('App/Models/User')
const Crossword = use('App/Models/Crossword')
const Database = use('Database')

class AuthController {

    async register({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        const {confirm_password} = request.post()
        try {
            //looking for user in database
            const userExists = await User.findBy('email', data.email)
            if (userExists) {
                return response.status(400).send({ message: { error: 'User already registered' } })
            }
            if(data.password !== confirm_password){
                return response.status(400).send({ message: { error: 'Password don\'t match'} })
            }
            const user = await User.create(data)

            //auto add pivot user_crosswords when registered
            const crosswords = await Crossword.all()

            for (let i in crosswords.rows) {

                const crossword = await crosswords.rows[i]
                
             await user.crosswords().attach([crossword.id], (row)=> {
                row.is_finished = 0
             })
            }         
           

            

            return response.status(201).json({
                'message': 'success',
                'data': {
                    'username': user.username,
                    'email': user.email,
                }
            })
        } catch (err) {
            console.log(err)
            return response.status(err.status).send(err)
        }
    }

    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password")
        try {
            await auth.attempt(email,password)
            let user = await User.findBy('email', email)
            let accessToken = await auth.generate(user)
            return response.json({ "user": user, "access_token": accessToken })
            
        }
        catch (e) {
            console.log(e)
            return response.status(400).json({ message: 'You first need to register!' })
        }
    }


}

module.exports = AuthController

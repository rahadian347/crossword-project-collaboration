'use strict'

const User = use('App/Models/User')

class AuthController {

    async register({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        console.log(data)
        try {
            //looking for user in database
            const userExists = await User.findBy('email', data.email)
            if (userExists) {
                return response.status(400).send({ message: { error: 'User already registered' } })
            }
            const user = await User.create(data)
            return response.status(201).json({
                'message': 'success',
                'data': {
                    'username': user.username,
                    'email': user.email,
                }
            })
        } catch (err) {
            return response.status(err.status).send(err)
        }
    }

    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password");
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let accessToken = await auth.generate(user)
                return response.json({ "user": user, "access_token": accessToken })
            }
        }
        catch (e) {
            return response.json({ message: 'You first need to register!' })
        }
    }


}

module.exports = AuthController

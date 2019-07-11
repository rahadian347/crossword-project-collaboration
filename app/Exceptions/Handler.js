'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {

    let message = error.message
    let status = error.status
    
    if(error.name == 'HttpException') {
      message = 'Route Not Found'
      status = 404
    } else if(error.name == 'PasswordMisMatchException') {
      message = 'Invalid Password'
      status = 400
    } else if(error.name == 'UserNotFoundException') {
      message = 'Email Not found'
      status = 404
    } else if(error.name == 'InvalidJwtToken') {
      message = 'Authorization Failed'
      status = 403
    } else if(error.name == 'Error') {
      message = 'Internal Server Error'
      status = 500
    }

    response.status(error.status).send(error.message)
  }

  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
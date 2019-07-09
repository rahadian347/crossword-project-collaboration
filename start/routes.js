'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')
Route.get('/submit_crossword/:crossword_id/:user_id','AnswerController.show').middleware(['CheckAnswer'])

Route.group(() => {
  
  Route.post('/submit', 'AuthController.login')


}).prefix('api/v1')
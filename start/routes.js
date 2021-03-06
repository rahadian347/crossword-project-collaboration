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

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')

Route.group(() => {
  Route.get('/','UserController.index')
  Route.get('/:id', 'UserController.show')
  Route.post('/', 'UserController.store')
  Route.patch('/:id', 'UserController.update')
  Route.delete('/:id', 'UserController.destroy')
}).prefix('/api/v1/users/').middleware(['auth:jwt'])

Route.group(() => {

  Route.get('/crosswords/','CrosswordController.index')
  Route.get('/crosswords/:id/answer','UserAnswerController.index')

  Route.post('/user_answer','UserAnswerController.store')
  Route.patch('/user_answer/:id','UserAnswerController.update')

  Route.patch('/user_crossword/:crossword_id/:user_id','AnswerController.show').middleware(['CheckAnswer'])

}).prefix('api/v1').middleware(['auth:jwt'])
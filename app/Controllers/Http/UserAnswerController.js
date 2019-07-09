'use strict'

const UserAnswer=use('App/Models/UserAnswer')
/**
 * Resourceful controller for interacting with useranswers
 */
class UserAnswerController {
  /**
   * Show a list of all useranswers.
   * GET useranswers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new useranswer.
   * GET useranswers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new useranswer.
   * POST useranswers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    response.json('test gan')
  }


z
  /**
   * Display a single useranswer.
   * GET useranswers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async show ({ params, request, response, view }) {
  //   const checkAnswer=await Crossword.query().where('').with('answers',builder => {
  //     builder.innerJoin('user_answers','answer','user_answers.answer')
  //   }).fetch()
  //   if (checkAnswer)
  // }

  /**
   * Render a form to update an existing useranswer.
   * GET useranswers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update useranswer details.
   * PUT or PATCH useranswers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a useranswer with id.
   * DELETE useranswers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserAnswerController

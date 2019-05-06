"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Category = use("App/Models/PokemonCategory");

/**
 * Resourceful controller for interacting with pokemoncategories
 */
class PokemonCategoryController {
  /**
   * Show a list of all pokemoncategories.
   * GET pokemoncategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const categories = await Category.all();
    try {
      if (categories.length !== 0) {
        response.status(201).json({
          message: "import success!",
          data: categories
        });
      } else {
        response.status(201).json({
          message: "import success!",
          data: []
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).send("Something went wrong");
    }
  }

  /**
   * Render a form to be used for creating a new pokemoncategory.
   * GET pokemoncategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pokemoncategory.
   * POST pokemoncategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single pokemoncategory.
   * GET pokemoncategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing pokemoncategory.
   * GET pokemoncategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pokemoncategory details.
   * PUT or PATCH pokemoncategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pokemoncategory with id.
   * DELETE pokemoncategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PokemonCategoryController;

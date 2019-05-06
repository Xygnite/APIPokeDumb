"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Type = use("App/Models/PokemonType");

/**
 * Resourceful controller for interacting with pokemontypes
 */
class PokemonTypeController {
  /**
   * Show a list of all pokemontypes.
   * GET pokemontypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const types = await Type.all();
    try {
      if (types.length !== 0) {
        response.status(201).json({
          message: "import success!",
          data: types
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
   * Render a form to be used for creating a new pokemontype.
   * GET pokemontypes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pokemontype.
   * POST pokemontypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single pokemontype.
   * GET pokemontypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing pokemontype.
   * GET pokemontypes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pokemontype details.
   * PUT or PATCH pokemontypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pokemontype with id.
   * DELETE pokemontypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PokemonTypeController;

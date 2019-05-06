"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Pokemon = use("App/Models/Pokemon");
const Database = use("Database");

/**
 * Resourceful controller for interacting with pokemons
 */
class PokemonController {
  async search({ request, response }) {
    let pokemonName = await request.input("name_like");

    let typeArr = await request.input("type_id");
    let categoryID = await request.input("category_id");
    let types;
    let limiter = await request.input("limit");
    if (!pokemonName) {
      pokemonName = "";
    }
    if (!categoryID) {
      categoryID = "%";
    }
    if (!limiter) {
      limiter = 10;
    }
    console.log(categoryID);
    let pokemonData;
    if (!typeArr) {
      pokemonData = await Database.from("pokemons")
        .where("name", "like", "%" + pokemonName + "%")
        .where("category", "like", categoryID)
        .limit(limiter);
      console.log(pokemonData);
    } else {
      types = JSON.parse(typeArr);
      pokemonData = await Database.from("pokemons")
        .where("name", "like", "%" + pokemonName + "%")
        .where("category", "like", categoryID)
        .whereIn("type_1", types)
        .whereIn("type_2", types)
        .limit(limiter);
      console.log(types);
    }

    try {
      if (pokemonData.length !== 0) {
        response.status(201).json({
          message: "import success!",
          data: pokemonData
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

    // if (pokemonName) {
    //   const pokemonData = await Database.from("pokemons").where(
    //     "name",
    //     "like",
    //     "%" + pokemonName + "%"
    //   );
    //   try {
    //     if (pokemonData.length !== 0) {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: pokemonData
    //       });
    //     } else {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: []
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     return response.status(400).send("Something went wrong");
    //   }
    // }
    // if (categoryID) {
    //   const pokemonData = await Database.from("pokemons").where(
    //     "category",
    //     "=",
    //     categoryID
    //   );
    //   try {
    //     if (pokemonData.length !== 0) {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: pokemonData
    //       });
    //     } else {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: []
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     return response.status(400).send("Something went wrong");
    //   }
    // }
    // if (typeArr) {
    //   const types = JSON.parse(typeArr);

    //   const pokemonData = await Database.from("pokemons")
    //     .whereIn("type_1", types)
    //     .orWhereIn("type_2", types);
    //   try {
    //     if (pokemonData.length !== 0) {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: pokemonData
    //       });
    //     } else {
    //       response.status(201).json({
    //         message: "import success!",
    //         data: []
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     return response.status(400).send("Something went wrong");
    //   }
    // }

    // if (limiter) {
    // }
  }
  /**
   * Show a list of all pokemons.
   * GET pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon = await Pokemon.all();
    try {
      if (pokemon.length !== 0) {
        response.status(201).json({
          message: "import success!",
          data: pokemon
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
   * Render a form to be used for creating a new pokemon.
   * GET pokemons/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pokemon.
   * POST pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const {
        name,
        img_url,
        type_1,
        type_2,
        category,
        latitude,
        longitude
      } = request.post();
      const pokemon = new Pokemon();
      pokemon.name = name;
      pokemon.img_url = img_url;
      pokemon.type_1 = type_1;
      pokemon.type_2 = type_2;
      pokemon.category = category;
      pokemon.latitude = latitude;
      pokemon.longitude = longitude;
      await pokemon.save();
      response.status(201).json({
        messages: "create success!",
        data: pokemon
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send("Something went wrong");
    }
  }

  /**
   * Display a single pokemon.
   * GET pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { id }, request, response, view }) {
    const pokemon = await Pokemon.find(id);
    response.json({
      message: "import success!",
      data: pokemon
    });
  }

  /**
   * Render a form to update an existing pokemon.
   * GET pokemons/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pokemon details.
   * PUT or PATCH pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params: { id }, request, response }) {
    try {
      const {
        name,
        img_url,
        type_1,
        type_2,
        category,
        latitude,
        longitude
      } = request.post();
      const pokemon = await Pokemon.findBy("id", id);

      pokemon.merge({
        name: name,
        img_url: img_url,
        type_1: type_1,
        type_2: type_2,
        category: category,
        latitude: latitude,
        longitude: longitude
      });
      await pokemon.save();
      response.json({
        messages: "update success!",
        data: pokemon
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send("Something went wrong");
    }
  }

  /**
   * Delete a pokemon with id.
   * DELETE pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params: { id }, request, response }) {
    try {
      const pokemon = await Pokemon.find(id);
      await pokemon.delete();
      response.json({
        messages: "delete success!",
        data: pokemon
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send("Something went wrong");
    }
  }
}

module.exports = PokemonController;

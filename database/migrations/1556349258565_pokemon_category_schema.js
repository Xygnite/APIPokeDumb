"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PokemonCategorySchema extends Schema {
  up() {
    this.create("pokemon_categories", table => {
      table.increments();
      table.string("name", 15);
      table.timestamps();
    });
  }

  down() {
    this.drop("pokemon_categories");
  }
}

module.exports = PokemonCategorySchema;

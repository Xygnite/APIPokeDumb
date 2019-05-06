"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PokemonTypeSchema extends Schema {
  up() {
    this.create("pokemon_types", table => {
      table.increments();
      table.string("name", 15);
      table.timestamps();
    });
  }

  down() {
    this.drop("pokemon_types");
  }
}

module.exports = PokemonTypeSchema;

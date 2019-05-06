"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PokemonPokemonTypeSchema extends Schema {
  up() {
    this.create("pokemon_pokemon_type", table => {
      table.increments();
      table
        .integer("pokemon_id")
        .unsigned()
        .references("id")
        .inTable("pokemons")
        .onDelete("CASCADE");
      table
        .integer("type_id")
        .unsigned()
        .references("id")
        .inTable("pokemon_types")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("pokemon_pokemon_type");
  }
}

module.exports = PokemonPokemonTypeSchema;

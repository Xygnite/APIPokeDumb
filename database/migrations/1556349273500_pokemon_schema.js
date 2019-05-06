"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PokemonSchema extends Schema {
  up() {
    this.create("pokemons", table => {
      table.increments();
      table.text("name");
      table.string("img_url", 200);
      table
        .integer("type_1", 10)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("pokemon_types");
      table
        .integer("type_2", 10)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("pokemon_types");
      table
        .integer("category", 10)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("pokemon_categories");
      table.string("latitude", 100);
      table.string("longitude", 100);
      table.timestamps();
    });
  }

  down() {
    this.drop("pokemons");
  }
}

module.exports = PokemonSchema;

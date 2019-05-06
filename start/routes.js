"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.get("/categories", "PokemonCategoryController.index");

Route.get("/types", "PokemonTypeController.index");

Route.get("/pokemons", "PokemonController.search");
Route.get("/pokemon/:id", "PokemonController.show");
Route.post("/pokemon", "PokemonController.store");
Route.patch("/pokemon/:id", "PokemonController.update");
Route.delete("/pokemon/:id", "PokemonController.destroy");

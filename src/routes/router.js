import express from "express";
import { controllers } from "../controllers/router.controller.js";
import { middleware } from "../middlewares/dataMiddleware.js";


export const expressRouters = () => {
  const router = express.Router();
  router.get("/pokemons", middleware.validateGet, controllers.getAll);
  router.get("/pokemons/:name", controllers.filterItemByName);

  router.post(
    "/createNewPokemon/",
    middleware.validatePost,
    controllers.postItem
  );

  router.delete(
    "/deletePokemon/:id",
    middleware.validateDelete,
    controllers.deleteItem
  );

  router.put(
    "/updatePokemon/",
    middleware.validateUpdate,
    controllers.updateItem
  );

  return router;
};

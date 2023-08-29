import express from "express";
import { controllers } from "../controllers/router.controller.js";
import { middleware } from "../middlewares/dataMiddleware.js";

export const expressRouters = () => {
  const router = express.Router();

  router.get("/", controllers.root);
  router.get("/pokemons", middleware.validateGet, controllers.getAll);
  router.get("/pokemons/:name", controllers.filterItemByName);
  router.post(
    "/createNewPokemon/",
    middleware.validatePost,
    controllers.postItem
  );

  //teste para a rota post
  router.get("/createTest/:id", controllers.testPostItem);

  return router;
};

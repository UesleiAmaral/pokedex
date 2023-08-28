import express from "express";
import { controllers} from "../controllers/routerController.js";
import { middleware } from "../middlewares/dataMiddleware.js";

const router = express.Router();

router.get("/", controllers.root);
router.get("/pokemons", middleware.validateGet, controllers.getAll);
router.get("/pokemons/:name", controllers.filterItemByName);
router.post("/createNewPokemon/", middleware.validatePost, controllers.postItem);
router.get("/createTest/:id", controllers.testPostItem);

export default router;

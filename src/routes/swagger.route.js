import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export const swaggerRouter = () => {
  const swaggerFile = require("../swagger_output.json");
  const router = Router();

  router.use("/", swaggerUi.serve);
  router.get("/", swaggerUi.setup(swaggerFile));

  return router;
};

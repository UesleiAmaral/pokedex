import "dotenv/config";
import express from "express";
import { expressRouters } from "./routes/router.js";

import {swaggerRouter} from "./routes/swagger.route.js";

export const application = () => {
  const swagger = swaggerRouter();
  const router = expressRouters();
  const app = express();

  //app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors);
  app.use("/", swagger);
  app.use('/v1', router);

  return app;
};

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    
  );

  next();
};

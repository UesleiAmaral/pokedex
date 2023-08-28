import "dotenv/config";
import express from "express";
import router from "./routes/router.js";

export const application = () => {
  const app = express();

  //app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors);
  app.use(router);

  return app;
};

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  console.log("CORS enabled for all origin!!");

  next();
};

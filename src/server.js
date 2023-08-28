import "dotenv/config";
import config from "config";
import { updateDataBase } from "./foreignAPI/index.js";
import { application } from './app.js';

const app = application();

const HOST = process.env.HOST || config.get("Customer.connectionConfig.host");
const PORT = process.env.PORT || config.get("Customer.connectionConfig.port");

app.listen(PORT, () => {
  console.log(`Server is Running on ${HOST}${PORT}`);

  updateDataBase();
});

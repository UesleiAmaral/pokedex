import config from "config";
import { updateDataBase } from "./foreignAPI/index.js";
import { application } from "./app.js";

const app = application();

const HOST = config.get("Customer.connectionConfig.host");
const PORT = config.get("Customer.connectionConfig.port");

app.listen(PORT, () => {
  console.log(`Server is Running on ${HOST}${PORT}`);

  updateDataBase();
});

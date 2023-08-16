import express from 'express';
import router from "./routes/routes.js"

const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', router);
app.use('/pokemons/:name', router);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);

});

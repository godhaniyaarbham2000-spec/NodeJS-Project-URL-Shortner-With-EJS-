import express from "express";
import router from "./router/shortener.routes.js";
//import{shortenedRoutes} from "./router/shortener.routes.js";  // named router

const PORT = 3007;

const app = express();

app.use(express.static("public"));

app.use(express.json()); // for JSON payloads
app.use(express.urlencoded({ extended: true })); // for form payloads

app.set("view engine", "ejs");
app.set("views", "./views");

// express router
app.use(router);

//named router
//app.use(shortenedRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

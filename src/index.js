import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;
const app = express();

// Template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//HTTP Logger
app.use(morgan("combined"));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

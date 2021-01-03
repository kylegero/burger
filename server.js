var express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3131;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



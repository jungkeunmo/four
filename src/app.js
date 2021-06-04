import express from "express";
import path from "path";
import morgan from "morgan";

const PORT = 7000;
const app = express();

app.use(morgan(`dev`))
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🙃`)
});
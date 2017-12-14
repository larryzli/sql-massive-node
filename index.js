const express = require("express");
const app = express();
const prodCtrl = require("./products_controller");

const { json } = require("body-parser");
const cors = require("cors");
app.use(json());
app.use(cors());

const massive = require("massive");
require("dotenv").config();
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(console.log);

app.post("/api/product/", prodCtrl.create);
app.get("/api/products/", prodCtrl.getAll);
app.get("/api/product/:id", prodCtrl.getOne);
app.put("/api/product/:id", prodCtrl.update);
app.delete("/api/product/:id", prodCtrl.delete);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

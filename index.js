const express = require("express");
const app = express();
require('dotenv').config();
const dbo = require("./conn");
const postsRoute = require('./routes/posts');

app.use(express.json());

app.use("/posts", postsRoute);

dbo.connectToServer((err) => {
    if (err) {
        console.error(err);
        process.exit();
    }

    app.listen(8080, () => {
        console.log("Server listening on 8080");
    });
})


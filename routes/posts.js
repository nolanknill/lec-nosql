const router = require('express').Router();
const dbo = require("../conn");

router.route("/")
    .get(async function (_req, res) {
        // return all our posts from the posts collection in mongodb
        const dbConnection = dbo.getDb();

        const posts = await dbConnection
            .collection("posts")
            .find({})
            .toArray();
        
        res.json(posts);
    })
    .post(async function (req, res) {
        // return all our posts from the posts collection in mongodb
        const dbConnection = dbo.getDb();

        const result = await dbConnection
            .collection("posts")
            .insertOne(req.body);
        
        res.status(201).json(result);
    });

module.exports = router;
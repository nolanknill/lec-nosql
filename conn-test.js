/**
 * You can run this file directly (node conn-test.js) to 
 * test your connection and insert a Post
 */
require('dotenv').config();
const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGODB_CONN_STRING;

const dbName = process.env.DB_NAME;
const collectionName = "posts";

async function main() {
    const client = new MongoClient(connectionString);

    try {
        await client.connect();
        console.log("Connected!");

        // await listAllDatabases(client);

        await createPost(client, {
            title: "I love NoSQL, sike",
            body: "I'd rather be working on my capstone",
            posted_at: (new Date()).getTime(),
            comments: [
                {
                    author: "LoopMain Bina",
                    comment: "Needs more loops"
                },
                {
                    author: "Fahd",
                    comment: "Hmmmmmmm...."
                }
            ]
        })

    } catch (e) {
        // handle errors here!
        console.error("Unable to connect", e);
    } finally {
        await client.close();
    }
}

async function createPost(client, post) {
    const result = await client
        .db(dbName)
        .collection(collectionName)
        .insertOne(post);

    console.log("Created a new post document with id: ", result.insertedId);
}

async function listAllDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log(databasesList);
    databasesList.databases.forEach(db => {
        console.log("Db: ", db.name);
    });
}


main().catch((error) => console.error(error));

# Lecture: NoSQL

Shows how to create and read from a MongoDB database.

## Additional Resources
- Connect to your database: [https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
- Express + MongoDB REST API  [https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)
- 🤿 Diving Deeper with Queries 🤿[https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial)



## Installation

Create a database cluster using Mongo Atlas Cloud:
[Getting started with Cloud Atlas](https://www.mongodb.com/docs/atlas/getting-started/)

Install packages with npm

```bash
  npm install
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You should Copy .env.sample to .env and update MongoDB connection string from your Mongo Atlas page.

`MONGODB_CONN_STRING`

`DB_NAME`


Start server:
```bash
npx nodemon index.js
```



## API Reference

#### Get all posts

```http
GET /posts
```

#### Create a post

```http
POSTS /posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | The title of the blog post |
| `body`    | `string` | The body of the blog post  |
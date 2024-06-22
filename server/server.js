const express = require("express");
const cors = require("cors");
const path = require("path");
const cookie = require("cookie-parser");
const Post = require("./src/models/post.js");

const app = express();

app.use(
  cors({
    origin: [
      "https://blog-app-server-tech.vercel.app",
      "http://localhost:5000",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(cookie());

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const base_url = process.env.API_BASE;

const NEW_PORT = 8080;

// main reponse - default route
app.get("/", (req, res) => {
  const post = {
    title: "breathe",
    summary: "i'm breathing that¹s why almight count",
    name: "Leave",
  };

  res.status(200).json({ data: post });
});

/* Post routes */

app.get("/post/all", async (req, res) => {
  try {
    let posts = await Post.find().populate("author", "username");

    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    console.log(err);
  }
});

//connect server to MONGODB and start it!
const connectDB = require("./src/config/db");

// listen on PORT 8080 (public port)
connectDB().then(() => {
  app.listen(NEW_PORT, () => {
    console.log(`server running on ${NEW_PORT}`);
  });
});

module.exports = app;

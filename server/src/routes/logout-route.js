const express = require("express");
const cookie = require("cookie-parser");
/* const { createProxyMiddleware } = require("http-proxy-middleware"); */

/* app.use(
  "/",
  createProxyMiddleware({
    target: "https://blog-app-server-tech.vercel.app/blogtech/api/logout",
    changeOrigin: true,
  })
); */

app.use(cookie());
app.use(express.urlencoded({ extended: false }));

app.post("/logout", (req, res) => {
  const prevCookie = req.cookies.userInfo;

  res.status(200).json({ success: true, data: `${prevCookie.userName}` });
});

const NEW_PORT = 8080;

const connectDB = require("../config/db");

// listen on PORT 8080 (public port)
connectDB().then(() => {
  app.listen(NEW_PORT, () => {
    console.log(`server running on ${NEW_PORT}`);
  });
});

module.exports = app;

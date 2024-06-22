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

module.exports = app;

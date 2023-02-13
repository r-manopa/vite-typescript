import express from "express";

function runApp() {
  const PORT = 3000;
  const app = express();

  app.get("/", (req, res) => {
    res.send("hello");
  });

  app.listen(PORT, () => console.log("app start at port " + PORT));
}

runApp();

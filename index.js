const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ name, email });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

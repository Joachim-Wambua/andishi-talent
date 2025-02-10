const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to validate request payload
app.get("/", (req, res) => {
  res.send("Andishi Talent Server is running!");
});

app.listen(port, (err, res) => {
  console.log("Andishi Talent Server is listening on port " + port);
});

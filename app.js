const express = require("express");

const app = express();

app.use(express.json());

const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

app.get("/:number", (req, res) => {
  res.json({ result: fibonacci(req.params.number) });
});

app.listen(3000, () => console.log("Server runnng on port 3000"));

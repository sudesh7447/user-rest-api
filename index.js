import express from "express";

import urouter from "./routes/users.js";
const app = express();

const PORT = 5000;

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use("", urouter);

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/dbinit");
connectDB();
const leaderboard = require("./routes/leaderboard_routes");

const port = process.env.PORT || 8081;

//middlewares
app.use(cors());
app.use(express.json());

app.use("/leaderboard", leaderboard);

app.get("/", (req, res) => {
  res.send("Welcome to our Pokemon API !");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

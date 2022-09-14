const express = require("express");
const connectDb = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

//Connect to database
connectDb();
require("./models/User");
require("./models/Profile");

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Server Running</h1>");
});

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, console.log("server created..."));

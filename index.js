const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./configs/keys");
require("./services/passport");
require("./models/User");

const app = express();
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

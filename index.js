const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const { mongoURI, cookieKey } = require("./configs/keys");
const passport = require("passport");
require("./models/User");
require("./services/passport");

const app = express();
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

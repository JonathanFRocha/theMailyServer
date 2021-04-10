const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleSecretKey } = require("../configs/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleSecretKey,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`access Token: ${accessToken}`);
      console.log(`refresh Token: ${refreshToken}`);
      console.log("teste ", profile);
    }
  )
);

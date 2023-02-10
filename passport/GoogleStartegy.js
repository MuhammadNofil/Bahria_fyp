const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../Schema/User/user.schema");

passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser(function (id, done) {
  User.findOne({ _id: id }, function (err, user) {
    return done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "958588976831-j113b2fdn71jkl49bo28ld564bck4g6n.apps.googleusercontent.com", // Your Credentials here.
      clientSecret: "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", // Your Credentials here.
      callbackURL: "http://localhost:5000/auth/callback",
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    async function (request, accessToken, refreshToken, profile, done) {
      // const newUser={
      //     name:profile.family_name,
      //     email:profile.email
      // }
      try {
        let user = await User.findOne({ email: profile.email });
        if (user) {
          console.log(user, "userr");
          return done(null, user);
        } else {
          user = await User.create({
            name: profile.family_name,
            email: profile.email,
          });
          console.log(user, "userr");
          return done(null, user);
        }
      } catch (error) {
        console.log("error");
      }
    }
  )
);

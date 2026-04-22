const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
    new GoogleStrategy(
        {
            clientID: "517261740124-02a0k7cj1a8d6outrnhgjb4r5pb8p2p3.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {

            try {

                console.log("Google profile:", profile);

                const email = profile.emails[0].value;
                console.log("Email extracted:", email);

                const existingUser = await User.findOne({ email: email });
                console.log("Existing user result:", existingUser);

                if (existingUser) {
                    console.log("Existing user found:", existingUser.email);
                    return done(null, existingUser);
                }

                const newUser = await User.create({
                    name: profile.displayName,
                    email: email,
                    password: "google-auth",
                    role: "user"
                });

                console.log("User created successfully:", newUser);

                done(null, newUser);

            } catch (error) {
                console.log("🔥 Google Auth Error:", error);
                done(error, null);
            }
        }
    )
);

module.exports = passport;
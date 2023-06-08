import passport from "passport";
import local from "./local";
import findOne from "../db/findOne";

export default () => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser<string>((id, done) => {
    const user = findOne(id);
    if (user) return done(null, user);
    return done(new Error("no user"));
  });
  passport.use(local);
};

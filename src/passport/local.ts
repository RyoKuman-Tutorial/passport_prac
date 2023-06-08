import { Strategy as LocalStrategy } from "passport-local";
import findOne from "../db/findOne";

export default new LocalStrategy({ usernameField: "id", passwordField: "password" }, (id, password, done) => {
  const userData = findOne(id);
  if (userData)
    if (password === userData.password) done(null, userData);
    else done(null, false, { message: "wrong password" });
  else done(null, false, { message: "wrong id" });
});

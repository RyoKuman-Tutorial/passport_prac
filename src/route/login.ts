import { Router, Request, Response } from "express";
import passport from "passport";

const login = Router();

login.get("/", (req: Request, res: Response) => {
  res.sendFile("/Users/ryokuman/Desktop/dev/2.study/passport/src/static/login.html");
});

login.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default login;

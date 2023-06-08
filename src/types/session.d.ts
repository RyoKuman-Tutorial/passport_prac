export type User = {
  id: string;
  email: string;
};

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

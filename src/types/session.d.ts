export type IUser = {
  id: string;
  password: string;
};

declare module "express-session" {
  interface SessionData {
    user: IUser;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    user?: IUser;
  }
}

declare global {
  namespace Express {
    export interface User extends IUser {}
  }
}

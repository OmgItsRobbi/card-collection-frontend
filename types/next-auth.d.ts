import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: User;
    access_token?: string;
    refresh_token?: string;
  }

  interface User {
    id?: number;
    email: string;
    access_token: string;
    refresh_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: User;
    access_token: string;
    refresh_token: string;
  }
}

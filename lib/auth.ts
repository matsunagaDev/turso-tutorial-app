import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import { baseUrl } from '@/lib/base-url';
import { nextCookies } from 'better-auth/next-js';
import { anonymous } from 'better-auth/plugins';

export const auth = betterAuth({
  baseURL: baseUrl(),
  database: drizzleAdapter(db, {
    provider: 'sqlite', // or "pg" or "mysql"
    usePlural: true,
  }),
  plugins: [
    nextCookies(),
    anonymous(), // 匿名ログイン
  ],
  //... the rest of your config
});

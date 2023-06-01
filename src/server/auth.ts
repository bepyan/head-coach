import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { type GetServerSidePropsContext } from 'next';
import { getServerSession, type NextAuthOptions, type DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import { env } from '~/env.mjs';
import { prisma } from '~/server/db';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    NaverProvider({
      clientId: env.NAVER_CLIENT_ID,
      clientSecret: env.NAVER_CLIENT_SECRET,
      style: {
        logo: 'https://logoproject.naver.com/favicon.ico',
        logoDark: 'https://logoproject.naver.com/favicon.ico',
        bgDark: '#2DB400',
        bg: '#2DB400',
        text: '#FFFFFF',
        textDark: '#FFFFFF',
      },
    }),
    KakaoProvider({
      clientId: env.KAKAO_CLIENT_ID,
      clientSecret: env.KAKAO_CLIENT_SECRET,
      style: {
        logo: 'https://developers.kakao.com/tool/resource/static/img/button/kakaotalksharing/kakaotalk_sharing_btn_small.png',
        logoDark: 'https://www.kakaocorp.com/page/favicon.ico',
        bgDark: '#FEE500',
        bg: '#FEE500',
        text: '#000000',
        textDark: '#000000',
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

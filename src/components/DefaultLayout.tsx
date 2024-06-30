import Head from 'next/head';
import type { ReactNode } from 'react';
import { menu } from '~/constants/router';
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../static/fonts/pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
const sf_pro_text = localFont({
  src: "../../static/fonts/sf-pro-text-medium-webfont.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-sf-pro-text",
});

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const activeMenuPath = '/search';
  return (
    <>
      <Head>
        <title>SC Assignment</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        />
      </Head>

      <main className={`${pretendard.variable} pb-16`}>{children}</main>

      <div
        className={`${sf_pro_text.variable}  fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200`}
      >
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium font-sf-pro-text">
          {menu.map((item, index) => (
            <button
              key={`menu-${index}`}
              type="button"
              className={`inline-flex flex-col items-center active:text-orange-text justify-center px-5 group ${
                item.path === activeMenuPath
                  ? 'text-orange-text'
                  : 'text-gray-menu'
              }`}
            >
              {item.icon}
              <span className="text-sm focus:text-orange-text active:text-orange-text group-hover:text-orange-text">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

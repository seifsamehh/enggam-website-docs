import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <img
      src="https://i.imgur.com/Y6fRw6x.png"
      alt="Enggam Logo"
      width={120}
      height={120}
    />
  ),
  project: {
    link: "https://www.enggam.com/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8c-1.1-1.3-2.1-2.5-3.2-3.7c-.4-.5-.8-.9-1.2-1.4l-4.1-4.7l-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1l-4.8-4.8l-.3-.3c-1.5-1.5-3-2.9-4.5-4.3c-.5-.5-1-1-1.6-1.5c-1-1-2-1.9-3-2.8c-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1c-1 .9-2 1.9-3 2.9c-.5.5-1 1-1.6 1.5c-1.5 1.4-3 2.9-4.5 4.3l-.3.3l-4.8 4.8l-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7c-.4.5-.8.9-1.2 1.4c-1.1 1.2-2.1 2.5-3.2 3.7c-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2c1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6c80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5c0-.1.1-.1.1-.2c1.4-1.5 2.8-3.1 4.1-4.7c.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3M887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6c29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484M658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4c3.7 1.4 7.4 2.9 11 4.4m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8c-17.4 32.4-37.8 58.3-59 75.1m59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4c21.2 16.7 41.6 42.6 59 75M540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4c-21.2-16.7-41.7-42.7-59.1-75.1c-11-20.6-20.7-43.3-29-67.8c37.2-14.6 75.9-23.3 115.8-26.1m0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8c17.4-32.4 37.8-58.4 59.1-75.1c9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4c-23.4 31.3-43.5 70.4-59.2 115.4c-21-12-40.9-26-59.4-41.8c31.8-29.2 67.9-52.4 107.6-69.2M165.5 365.7c13.8-32.6 32-62.8 54.2-90.2c24.9 21.5 52.2 40.3 81.5 55.9c-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3M137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2c18.5-15.8 38.4-29.7 59.4-41.8c15.7 45 35.8 84.1 59.2 115.4c-3.7-1.4-7.4-2.9-11-4.4m292.6 0c-3.7 1.5-7.3 3-11 4.4c23.4-31.3 43.5-70.4 59.2-115.4c21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2"
        />
      </svg>
    ),
  },
  chat: {
    link: "https://tawk.to/chat/64c418e5cc26a871b02bddaa/1h6f02gqc",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M160 826.88L273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64zM296 800L147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z"
        />
        <path
          fill="currentColor"
          d="M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"
        />
      </svg>
    ),
  },
  banner: {
    key: "1.0-release",
    text: (
      <a href="https://www.enggam.com/" target="_blank">
        🎉 ENGGAM 1.0 is released. Read more →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "About") {
        return <>❓ {title}</>;
      }
      return <>{title}</>;
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Docs",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://enggam-website-docs.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "ENGGAM"} />
        <meta
          property="og:description"
          content={frontMatter.description || "ENGGAM Docs"}
        />
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/L9ON2E7.png"
        ></link>
      </>
    );
  },
  footer: {
    text: (
      <span>
        All right reserved {new Date().getFullYear()} ©{" "}
        <a href="https://www.enggam.com/" target="_blank">
          ENGGAM
        </a>
        .
      </span>
    ),
  },
  editLink: {
    component() {
      return (
        <a
          href="https://tawk.to/chat/64c418e5cc26a871b02bddaa/1h6f02gqc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "none" }}
        >
          Want to add a new page?
        </a>
      );
    },
  },
  feedback: {
    content: null,
  },
};

export default config;

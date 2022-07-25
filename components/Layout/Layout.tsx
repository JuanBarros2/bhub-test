import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "BHub" }: Props) => (
  <div className="flex flex-col w-full justify-center p-4 ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex flex-row gap-8 justify-center">
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "BHub" }: Props) => (
  <div className="flex flex-col w-full justify-center p-4 px-8">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex flex-row gap-8 justify-center flex-wrap my-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/create">
          <a>Criar cliente</a>
        </Link>
      </nav>
    </header>
    <main className="container mx-auto my-4">{children}</main>
  </div>
);

export default Layout;

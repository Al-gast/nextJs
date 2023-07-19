import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ata</title>
        <meta name="description" content="Ini adalah website Ata" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/sales">Sales</Link>
          </li>
          <li>
            <Link href="/userprofile">UserProfile</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {

  const  navigations = [
    {
      "id": 1,
      "href": "/",
      "title": "Home"
    },
    {
      "id": 2,
      "href": "/about",
      "title": "About"
    },
    {
      "id": 3,
      "href": "/sales",
      "title": "Sales"
    },
    {
      "id": 4,
      "href": "/userprofile",
      "title": "User Profile"
    },
    {
      "id": 5,
      "href": "/products",
      "title": "Products"
    },
    {
      "id": 6,
      "href": "/portfolio",
      "title": "Portfolio"
    },
    {
      "id": 7,
      "href": "/feedback",
      "title": "Feedback"
    }
  ];

  return (
    <>
      <Head>
        <title>Ata</title>
        <meta name="description" content="Ini adalah website Ata" />
      </Head>

      <nav>
        <ul className="navbar">
          {navigations.map((nav) => (
            <li className="nav-item" key={nav.id}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
          ))}
        </ul>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

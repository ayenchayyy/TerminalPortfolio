import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aysha, frond end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Aysha" />
        <meta
          name="keywords"
          content="Aysha, Rasel, MdRasel, mern stack developer, terminal portfolio, terminal style portfolio, nextJS portfolio"
        />
        <meta
          name="description"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta
          property="og:title"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta
          property="og:description"
          content="Hi, I'm aysha, A Programmer and front end developer.."
        />
        <meta property="og:image" content="https://i.ibb.co/2SDhrHX/og.png" />
        <meta property="og:url" content="https://terminal.firasel.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta name="twitter:url" content="https://terminal.firasel.com/" />
        <meta
          name="twitter:description"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta name="twitter:image" content="https://i.ibb.co/2SDhrHX/og.png" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;

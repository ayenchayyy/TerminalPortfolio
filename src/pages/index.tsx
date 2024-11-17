import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aysha, front end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Aysha" />
        <meta
          name="keywords"
          content="Aysha, developer, terminal portfolio, terminal style portfolio, nextJS portfolio"
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
        <meta property="og:image" content="https://ibb.co/zNmr8wQ" />
        <meta property="og:url" content="https://ayencha.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta name="twitter:url" content="https://ayencha.com/" />
        <meta
          name="twitter:description"
          content="Hi, I'm aysha, A Programmer and front end developer."
        />
        <meta name="twitter:image" content="https://ibb.co/zNmr8wQ" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;

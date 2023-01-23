import Head from "next/head";
import { Navbar, Main, About, Skills } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smeet | Front-End Developer</title>
        <meta name="description" content="Portfolio of smeet agrawal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </>
  );
}

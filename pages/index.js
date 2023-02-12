import Head from "next/head";
import { Main, About, Skills, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smeet | JavaScript Developer</title>
        <meta name="description" content="Portfolio of smeet agrawal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

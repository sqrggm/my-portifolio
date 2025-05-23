import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Site - Página Inicial</title>
        <meta name="description" content="Bem-vindo ao meu site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <div className="hidden sm:block">
            <FloatingNav navItems={navItems}></FloatingNav>
          </div>
          <Hero></Hero>
          <Grid></Grid>
          <RecentProjects></RecentProjects>
          <Footer></Footer>
        </div>
      </main >
    </>
  );
}

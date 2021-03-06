import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Places from "../components/Places";
import Questions from "../components/Questions";

export default function Home({ response }) {
  console.log(response);
  return (
    <div>
      <Head>
        <title>My Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* header */}
        <Header />
        {/* banner */}
        <Banner />
        {/* places */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 ">
          <h1 className="text-2xl pt-6 md:text-4xl font-semibold">
            Inspiration for your next trip
          </h1>
          {/* places component  */}
          <Places />
        </section>
        {/* discover component */}
        <Discover />
        {/* questions component */}
        <Questions />
        {/* footer */}
        <Footer />
      </main>
    </div>
  );
}

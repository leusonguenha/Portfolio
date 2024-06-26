import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewPort" content="inicial-scale=1.0, width=device-width" />
        <meta title="Leuso - About" />
      </Head>
      <Menu />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;

import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewPort" content="inicial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        ></link>
        <meta title="Leuso - Home" />
      </Head>
      <Menu />
      <Card />
      <Footer />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script src="custom.js"></script>
    </>
  );
}

export default Home;

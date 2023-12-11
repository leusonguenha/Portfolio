import Head from "next/head";
import Menu from "../components/Menu";

function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewPort" content="inicial-scale=1.0, width=device-width" />
        <meta title="Leuso - Home" />
      </Head>
      <Menu />
      Blog
    </div>
  );
}

export default Home;

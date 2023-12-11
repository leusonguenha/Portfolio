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
      Leuso Nguenha Site
      <script src="/custom.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.slim.js"
        integrity="sha512-docBEeq28CCaXCXN7cINkyQs0pRszdQsVBFWUd+pLNlEk3LDlSDDtN7i1H+nTB8tshJPQHS0yu0GW9YGFd/CRg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </div>
  );
}

export default Home;

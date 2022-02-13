import Head from "next/head";

import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";

import theme from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ariel Demo</title>
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;

import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Theme from "@/src/theme/Theme";
import Layout from "@/src/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}

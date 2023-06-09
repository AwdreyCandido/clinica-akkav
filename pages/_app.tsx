import ClinicDataProvider from "@/context/ClinicContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/" || router.pathname.includes("/_error")) {
      router.push("/clinics");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Clínica AKKAV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ClinicDataProvider>
        <Component {...pageProps} />
      </ClinicDataProvider>
    </>
  );
}

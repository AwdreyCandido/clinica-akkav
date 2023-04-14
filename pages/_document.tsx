import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <div id="portal-root"></div>
        <div id="backdrop-root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

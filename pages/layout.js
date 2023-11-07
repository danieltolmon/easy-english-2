import Head from "next/head";

import Footer from '../components/Footer'
import Menu from '../components/Menu'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Easy English</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
      </Head>

      <Menu />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </div>
  );
}

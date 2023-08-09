import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Home from '../components/Home'

const components = {
  // feature: Feature,
  // grid: Grid,
  // teaser: Teaser,
  // page: Page,
  home : Home
};

storyblokInit({
  accessToken: "jzQhjZ1f0e2RTFeecEDq4gtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

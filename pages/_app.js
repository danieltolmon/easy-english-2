import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Home from '../components/Home'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const components = {
  home: Home
};

storyblokInit({
  accessToken: "jzQhjZ1f0e2RTFeecEDq4gtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingWhatsApp 
        phoneNumber="34692461556" 
        accountName="Easy English" 
        allowClickAway 
        avatar={'/logo.png'}
        />

    </>)
}

export default MyApp;

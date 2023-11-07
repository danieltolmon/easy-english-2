import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import HomePage from '../components/Home'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export default function Home({ story }) {
  story = useStoryblokState(story);

  console.log(story.content)

  return (
    <div>
      <Head>
        <title>Easy English</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
      </Head>

      <Menu />
      <HomePage blok={story.content.body[0]} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

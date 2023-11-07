
import {
  useStoryblokState,
  getStoryblokApi,
} from "@storyblok/react";

import HomePage from '../components/Home'

import Layout from './layout'

export default function Home({ story }) {
  story = useStoryblokState(story);

  console.log(story.content)

  return (
    <Layout>
      <HomePage blok={story.content.body[0]} />
    </Layout>
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

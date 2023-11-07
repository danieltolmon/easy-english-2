import Layout from "../layout"

import {
    useStoryblokState,
    getStoryblokApi,
} from "@storyblok/react";

import { render } from 'storyblok-rich-text-react-renderer';


const Ampas = ({ story }) => {
    const { content } = useStoryblokState(story);

    return (
        <Layout>
            <div>
                <div className="w-full h-[600px] bg-fixed bg-cover bg-center flex justify-center items-center"
                    style={{ backgroundImage: `url(${content.image.filename})` }}>
                    <div>
                        <h1 className="text-white text-[100px]">
                            {content.title}
                        </h1>
                        <div className="w-full flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Contacta
                            </button>
                        </div>
                    </div>
                </div>
                <div className="m-5 flex justify-center content-center">
                    <div>
                        {render(content.info)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let slug = "ampas";

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

export default Ampas
import { storyblokEditable } from "@storyblok/react";
import GoogleMapReact from 'google-map-react';

const HomePage = ({ blok }) => {
    console.log({ blok })

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div {...storyblokEditable(blok)}>
            {/* <div className="w-full flex justify-center">
                <Image src={blok.coverImage[0].filename} width={1050} height={700} />
            </div> */}
            {/* <p className="text-2xl text-gray-900 dark:text-white">{blok.methodology}</p> */}
            <div className="w-full h-[600px] bg-fixed bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${blok.coverImage[0].filename})` }}>
            </div>

            <div className="py-20 px-4 space-y-8 max-w-[1200px] m-auto">
                <p className="text-2xl text-gray-900 dark:text-white">{blok.methodology}</p>
                <h2>Metohodology</h2>
                <p className="text-2xl text-gray-900 dark:text-white">{blok.methodology}</p>
                <p className="text-2xl text-gray-900 dark:text-white">{blok.methodology}</p>
            </div>

            {/* <div className="w-full h-[800px]">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                
                </GoogleMapReact>
            </div> */}

        </div >
    )
}

export default HomePage
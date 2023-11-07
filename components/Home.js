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
                <p className="text-2xl text-gray-900 dark:text-white">{blok.primaryText}</p>
                <h2>Sobre Nosaltres</h2>
                <p className="text-2xl text-gray-900 dark:text-white">{blok.methodology}</p>
                <h2>La nostre metodologia</h2>
                <p className="text-2xl text-gray-900 dark:text-white">{blok.aboutUs}</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11996.504293101843!2d1.170298!3d41.2625908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a1555461910087%3A0x98de529237de1111!2sEasy%20English%20Academies!5e0!3m2!1ses!2sin!4v1691581180971!5m2!1ses!2sin" allowfullscreen width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div >
    )
}

export default HomePage
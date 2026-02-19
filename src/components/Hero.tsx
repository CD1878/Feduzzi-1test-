import { VIDEO_URL, IMAGES } from '../constants/images';

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                poster={IMAGES.meatballs} // Fallback
            >
                <source src={VIDEO_URL} type="video/mp4" />
            </video>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 font-light tracking-wide">
                    Fresh Italian Take-Away & Catering
                </h1>
                <p className="font-sans text-base md:text-xl font-light tracking-wide mb-10 opacity-90">
                    Traiteur - Lunch - Italiaanse Delicatessen
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-8 py-3 uppercase text-xs font-bold tracking-widest transition-colors">
                        Bestel catering
                    </a>
                    <a href="#" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-8 py-3 uppercase text-xs font-bold tracking-widest transition-colors">
                        Bestel broodjes
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

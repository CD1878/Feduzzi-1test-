import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    poster={IMAGES.meatballs} // Fallback image
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 font-light tracking-wide shadow-sm animate-fadeIn">
                    {t('hero_title')}
                </h1>
                <p className="font-sans text-base md:text-xl font-light tracking-wide mb-12 opacity-0 shadow-sm max-w-2xl animate-slideUp" style={{ animationDelay: '0.3s' }}>
                    {t('hero_subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                    <a href="/catering" className="bg-feduzzi-red hover:bg-white hover:text-feduzzi-red border border-transparent hover:border-feduzzi-red text-white px-10 py-4 uppercase text-xs font-bold tracking-widest transition-all duration-300 rounded-sm hover:shadow-lg hover:-translate-y-0.5 transform">
                        {t('bestel_catering')}
                    </a>
                    <a href="/menu" className="bg-transparent border border-white hover:bg-white hover:text-feduzzi-dark text-white px-10 py-4 uppercase text-xs font-bold tracking-widest transition-all duration-300 rounded-sm hover:shadow-lg hover:-translate-y-0.5 transform">
                        {t('bestel_broodjes')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

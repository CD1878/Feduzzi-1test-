import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CateringModal from '../components/CateringModal';

const Catering = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="pt-24 pb-16 px-4 md:px-8 bg-feduzzi-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-feduzzi-olive/10 rounded-l-full hidden lg:block"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1">
                        <span className="text-feduzzi-red font-bold uppercase tracking-widest text-xs mb-3 block">{t('catering')}</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-feduzzi-dark mb-6 leading-none">
                            {t('catering_titel')} <br />
                            <span className="italic text-feduzzi-olive text-3xl md:text-5xl">{t('catering_subtitel')}</span>
                        </h1>
                        <p className="font-sans text-gray-700 text-lg leading-relaxed mb-6">
                            {t('catering_intro')}
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-feduzzi-red text-white px-8 py-3 uppercase text-xs font-bold tracking-widest rounded-sm hover:bg-feduzzi-dark transition-colors shadow-lg"
                        >
                            {t('offerte_aanvragen')}
                        </button>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0">
                        <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.serviceCatering} alt="Feduzzi Catering" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-feduzzi-red rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* Parties Section - Green */}
            <section className="py-16 bg-[#7F9F7B] text-white px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight drop-shadow-sm">
                            {t('feesten_partijen')}
                        </h2>
                        <p className="text-white leading-relaxed text-lg drop-shadow-sm opacity-90">
                            {t('feesten_text')}
                        </p>
                        <Link to="/menu" className="inline-block border border-white/40 hover:bg-white hover:text-feduzzi-olive text-white px-6 py-2 uppercase text-xs font-bold tracking-widest transition-all rounded-sm mt-4">
                            {t('bekijk_menu_opties')}
                        </Link>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0">
                        <div className="relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Reusing bag image as placeholder specifically for parties if better one not available, or re-using serviceMaaltijden */}
                            <img src={IMAGES.serviceMaaltijden} alt="Feesten Catering" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Section - Cream */}
            <section className="py-16 bg-white px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-feduzzi-dark leading-tight">
                            {t('zakelijk')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {t('zakelijk_text')}
                        </p>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0">
                        <div className="relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.serviceBroodjes} alt="Zakelijke Lunch" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-feduzzi-olive rounded-2xl z-0 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote/CTA Section */}
            <div className="bg-feduzzi-red text-white py-16 px-4 border-t border-white/10">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="font-serif text-2xl md:text-4xl leading-tight italic text-white drop-shadow-md">
                        {t('catering_contact_titel')}
                    </h2>
                    <p className="text-white/90 text-lg">
                        {t('catering_contact_text')}
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block bg-white text-feduzzi-red px-10 py-4 uppercase text-sm font-bold tracking-widest rounded-sm hover:bg-feduzzi-cream transition-colors shadow-lg"
                    >
                        {t('offerte_aanvragen')}
                    </button>
                </div>
            </div>

            <CateringModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Catering;

import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';

const OverOns = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Playful Layout */}
            <div className="pt-24 pb-16 px-4 md:px-8 bg-feduzzi-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-feduzzi-olive/10 rounded-l-full hidden lg:block"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1">
                        <span className="text-feduzzi-red font-bold uppercase tracking-widest text-xs mb-3 block">{t('over_ons')}</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-feduzzi-dark mb-6 leading-none">
                            {t('over_ons_titel')} <br />
                            <span className="italic text-feduzzi-olive text-3xl md:text-5xl">{t('over_ons_subtitel')}</span>
                        </h1>
                        <p className="font-sans text-gray-700 text-lg leading-relaxed mb-6">
                            {t('over_ons_intro')}
                        </p>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0">
                        <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.shelf} alt="Feduzzi Interieur" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-feduzzi-red rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* Meet the Owners - Green Section */}
            <section className="py-16 bg-[#7F9F7B] text-white px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 space-y-6">
                        <span className="inline-block py-1 px-3 border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                            {t('het_team')}
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight drop-shadow-sm">
                            {t('passie_voor')} <span className="text-white italic">{t('italiaans_eten')}</span>
                        </h2>

                        <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                            <h3 className="font-serif text-2xl text-white mb-4 drop-shadow-sm">{t('wie_zijn_wij')}</h3>
                            <p className="text-white leading-relaxed text-lg drop-shadow-sm">
                                {t('wie_zijn_wij_tekst')}
                                <br /><br />
                                <span className="font-serif italic text-white/90">{t('quote_team')}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0">
                        <div className="relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.chefs} alt="Nick & Nees" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />

                            <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl max-w-xs border-l-4 border-feduzzi-red hidden md:block transform rotate-2 text-feduzzi-dark">
                                <h4 className="font-serif text-lg text-feduzzi-dark mb-1">{t('wist_je_dat_titel')}</h4>
                                <p className="text-xs text-gray-600 italic">
                                    {t('wist_je_dat_text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Green Quote Section - Compact */}
            <div className="bg-feduzzi-red text-white py-16 px-4 border-t border-white/10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-2xl md:text-4xl leading-tight italic text-white drop-shadow-md">
                        “In cucina si buttano le briglie della creatività”
                    </h2>
                </div>
            </div>

            {/* "Wat is Feduzzi" Section - Cream Background */}
            <div className="py-16 px-4 md:px-8 bg-feduzzi-cream">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative group">
                        <div className="absolute -top-3 -left-3 w-full h-full bg-feduzzi-olive/20 rounded-2xl z-0 transition-all duration-500 group-hover:top-3 group-hover:left-3"></div>
                        <img src={IMAGES.chefs} alt="Het Feduzzi Team" className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300" />
                    </div>

                    <div className="order-1 md:order-2 space-y-5">
                        <h2 className="font-serif text-3xl md:text-4xl text-feduzzi-dark">{t('wat_is_feduzzi')}</h2>
                        <div className="prose prose-lg text-gray-700 font-sans text-base">
                            <p>
                                {t('wat_is_feduzzi_text1')}
                            </p>
                            <p>
                                {t('wat_is_feduzzi_text2')}
                            </p>
                        </div>
                        <a href="/menu" className="inline-block mt-4 text-feduzzi-red font-bold uppercase tracking-widest text-xs hover:underline cursor-pointer">
                            {t('bekijk_aanbod')} &rarr;
                        </a>
                    </div>
                </div>
            </div>    </div>
    );
};
export default OverOns;

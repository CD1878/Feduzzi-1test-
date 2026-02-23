import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';

const Intro = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-feduzzi-red font-serif text-3xl md:text-4xl mb-4">
                        {t('intro_title')}
                    </h2>
                    <div className="h-10 w-px bg-black mx-auto mb-6"></div>
                    <div className="font-sans text-gray-700 leading-relaxed text-lg space-y-6">
                        <p>
                            {t('intro_p1')}
                        </p>
                        <p>
                            {t('intro_p2')}
                        </p>
                        <p>
                            {t('intro_p3_start')}<Link to="/vestigingen" className="underline hover:text-feduzzi-red">Amsterdam</Link>{t('intro_p3_mid')}<Link to="/vestigingen" className="underline hover:text-feduzzi-red">Laren</Link>{t('intro_p3_end')}
                        </p>
                    </div>
                </div>

                {/* Photo Grid - Custom Masonry Layout Simulation */}
                {/* Photo Collage - Organic Scattering (Tightened Cluster) */}
                <div className="relative h-[500px] md:h-[700px] w-full mb-20 mt-8 hidden md:block">
                    <div className="absolute top-[10%] left-[20%] w-64 h-64 z-10 hover:z-20 transition-all duration-500 hover:scale-105 -rotate-6 shadow-2xl">
                        <img src={IMAGES.shelf} alt="Shelves" className="w-full h-full object-cover rounded-lg border-4 border-white" />
                    </div>
                    <div className="absolute top-[5%] left-[40%] w-72 h-80 z-20 hover:z-30 transition-all duration-500 hover:scale-105 rotate-3 shadow-2xl">
                        <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-full object-cover rounded-lg border-4 border-white" />
                    </div>
                    <div className="absolute top-[15%] right-[20%] w-64 h-64 z-10 hover:z-20 transition-all duration-500 hover:scale-105 rotate-12 shadow-2xl">
                        <img src={IMAGES.chefs} alt="Chefs" className="w-full h-full object-cover rounded-lg border-4 border-white" />
                    </div>
                    <div className="absolute bottom-[20%] left-[25%] w-72 h-64 z-30 hover:z-40 transition-all duration-500 hover:scale-105 -rotate-3 shadow-2xl">
                        <img src={IMAGES.bag} alt="Bag" className="w-full h-full object-cover rounded-lg border-4 border-white" />
                    </div>
                    <div className="absolute bottom-[10%] right-[30%] w-60 h-60 z-20 hover:z-30 transition-all duration-500 hover:scale-105 rotate-6 shadow-2xl">
                        <img src={IMAGES.sandwich} alt="Sandwich" className="w-full h-full object-cover rounded-lg border-4 border-white" />
                    </div>
                </div>

                {/* Mobile Grid (Tight & Aligned) */}
                <div className="grid grid-cols-2 gap-3 md:hidden mb-12 px-4">
                    <img src={IMAGES.shelf} alt="Shelves" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-40 object-cover rounded-lg shadow-md translate-y-4" />
                    <img src={IMAGES.chefs} alt="Chefs" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={IMAGES.pasta} alt="Pasta" className="w-full h-40 object-cover rounded-lg shadow-md translate-y-4" />
                </div>

                <div className="text-center">
                    <Link to="/over-ons" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-10 py-4 uppercase text-xs font-bold tracking-widest transition-colors rounded-sm inline-block">
                        {t('meer_over_ons')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Intro;

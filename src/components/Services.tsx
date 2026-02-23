import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ image, title, description, buttonText, link }: { image: string, title: string, description: string, buttonText: string, link: string }) => (
    <div className="flex flex-col">
        <div className="w-full aspect-square overflow-hidden rounded-lg mb-6">
            <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <h3 className="font-serif text-3xl text-feduzzi-green mb-4 font-light">{title}</h3>
        <p className="font-sans text-gray-700 mb-8 leading-relaxed text-sm md:text-base min-h-[80px]">
            {description}
        </p>
        <div>
            <Link to={link || '#'} className="border border-gray-400 hover:border-black text-gray-600 hover:text-black px-8 py-3 uppercase text-xs font-bold tracking-widest transition-all rounded-sm inline-block">
                {buttonText}
            </Link>
        </div>
    </div>
);

const Services = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 md:px-8 bg-feduzzi-cream">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-serif text-3xl md:text-5xl text-gray-400 font-light mb-16">
                    {t('italiaanse_delicatessen')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <ServiceCard
                        image={IMAGES.serviceMaaltijden}
                        title={t('service_maaltijden_titel')}
                        description={t('service_maaltijden_desc')}
                        buttonText={t('bekijk_maaltijden')}
                        link="/menu"
                    />
                    <ServiceCard
                        image={IMAGES.serviceBroodjes}
                        title={t('service_broodjes_titel')}
                        description={t('service_broodjes_desc')}
                        buttonText={t('bekijk_broodjes')}
                        link="/menu"
                    />
                    <ServiceCard
                        image={IMAGES.serviceCatering}
                        title={t('service_traiteur_titel')}
                        description={t('service_traiteur_desc')}
                        buttonText={t('bekijk_catering')}
                        link="/catering"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;

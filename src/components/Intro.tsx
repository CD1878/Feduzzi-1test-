import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Intro = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-feduzzi-red font-serif text-3xl md:text-4xl mb-4">
                        Feduzzi Mercato Italiano
                    </h2>
                    <div className="h-10 w-px bg-black mx-auto mb-6"></div>
                    <div className="font-sans text-gray-700 leading-relaxed text-lg space-y-6">
                        <p>
                            Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één. Feduzzi heeft zich in 1981 gevestigd in Amsterdam en is sinds 2022 overgenomen door Nick en Nees.
                        </p>
                        <p>
                            Feduzzi staat voor kwaliteit en gastvrijheid. Ons doel is dan ook om u thuis te laten voelen in onze winkel, zodat u niet alleen een boodschap komt halen, maar ook een ervaring rijker bent. Denk aan Italiaanse vlees-, vis- en vegagerechten, maar ook aan een rijk assortiment Italiaanse delicatessen die u niet snel ergens anders tegenkomt.
                        </p>
                        <p>
                            Vriendelijk personeel, Italiaanse muziek en een prachtige winkels in <Link to="/vestigingen" className="underline hover:text-feduzzi-red">Amsterdam</Link> en <Link to="/vestigingen" className="underline hover:text-feduzzi-red">Laren</Link> waar het lijkt alsof u echt in Italië bent. Wij staan voor u klaar. Wanneer zien wij u bij ons in de winkel?
                        </p>
                    </div>
                </div>

                {/* Photo Grid - Custom Masonry Layout Simulation */}
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] mb-16">

                    {/* Row 1 */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
                        <img src={IMAGES.shelf} alt="Shelves" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="col-span-2 md:col-span-4 lg:col-span-5 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
                        <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="col-span-2 md:col-span-3 lg:col-span-4 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
                        <img src={IMAGES.chefs} alt="Chefs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Row 2 (offset layout) */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-4 row-span-1 md:row-span-2 overflow-hidden rounded-lg lg:-mt-12">
                        <img src={IMAGES.sandwich} alt="Sandwich" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="col-span-2 md:col-span-3 lg:col-span-5 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
                        <img src={IMAGES.pasta} alt="Pasta" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="col-span-2 md:col-span-3 lg:col-span-3 row-span-1 md:row-span-2 overflow-hidden rounded-lg lg:-mt-24">
                        <img src={IMAGES.bag} alt="Bag" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                </div>

                <div className="text-center">
                    <Link to="/over-ons" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-10 py-4 uppercase text-xs font-bold tracking-widest transition-colors rounded-sm inline-block">
                        Meer over ons
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Intro;

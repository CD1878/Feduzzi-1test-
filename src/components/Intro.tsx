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
                {/* Photo Collage - Organic Scattering */}
                <div className="relative h-[600px] md:h-[800px] w-full mb-20 mt-12 hidden md:block">
                    {/* Left Cluster */}
                    <div className="absolute top-0 left-0 w-1/4 h-64 z-10 hover:z-20 transition-all duration-500 hover:scale-105 -rotate-3">
                        <img src={IMAGES.shelf} alt="Shelves" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                    <div className="absolute top-40 left-[15%] w-1/3 h-80 z-20 hover:z-30 transition-all duration-500 hover:scale-105 rotate-2">
                        <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>

                    {/* Right Top Cluster */}
                    <div className="absolute top-10 right-[5%] w-1/3 h-72 z-10 hover:z-20 transition-all duration-500 hover:scale-105 rotate-3">
                        <img src={IMAGES.chefs} alt="Chefs" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>

                    {/* Center/Bottom Cluster */}
                    <div className="absolute bottom-20 left-[5%] w-1/3 h-64 z-10 hover:z-20 transition-all duration-500 hover:scale-105 rotate-1">
                        <img src={IMAGES.bag} alt="Bag" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                    <div className="absolute bottom-40 right-[25%] w-1/4 h-56 z-0 hover:z-20 transition-all duration-500 hover:scale-105 -rotate-6">
                        <img src={IMAGES.sandwich} alt="Sandwich" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                    <div className="absolute bottom-0 right-[5%] w-1/3 h-80 z-20 hover:z-30 transition-all duration-500 hover:scale-105 -rotate-2">
                        <img src={IMAGES.pasta} alt="Pasta" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                </div>

                {/* Mobile Grid (Simplified for smaller screens) */}
                <div className="grid grid-cols-2 gap-4 md:hidden mb-12">
                    <img src={IMAGES.shelf} alt="Shelves" className="w-full h-40 object-cover rounded-lg shadow-md -rotate-1" />
                    <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-40 object-cover rounded-lg shadow-md rotate-2 translation-y-4" />
                    <img src={IMAGES.chefs} alt="Chefs" className="w-full h-40 object-cover rounded-lg shadow-md rotate-1" />
                    <img src={IMAGES.pasta} alt="Pasta" className="w-full h-40 object-cover rounded-lg shadow-md -rotate-2" />
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

import { IMAGES } from '../constants/images';

const OverOns = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Playful Layout */}
            <div className="pt-32 pb-20 px-4 md:px-8 bg-feduzzi-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-feduzzi-olive/10 rounded-l-full hidden lg:block"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1">
                        <span className="text-feduzzi-red font-bold uppercase tracking-widest text-xs mb-4 block">Onze Geschiedenis</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-feduzzi-dark mb-8 leading-none">
                            Al sinds 1981 <br />
                            <span className="italic text-feduzzi-olive text-4xl md:text-6xl">een begrip in Amsterdam</span>
                        </h1>
                        <p className="font-sans text-gray-700 text-lg leading-relaxed mb-8">
                            Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één.
                            Wat begon als een kleine speciaalzaak is uitgegroeid tot dé plek voor authentiek Italiaans genieten.
                        </p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.shelf} alt="Feduzzi Interieur" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-feduzzi-red rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* Meet the Owners - Green Section */}
            <section className="py-24 bg-feduzzi-olive text-white px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 relative">
                        <img src={IMAGES.chefs} alt="Nick & Nees" className="w-full h-[400px] object-cover rounded-lg shadow-xl" />
                        <div className="absolute -top-4 -right-4 bg-feduzzi-gold text-feduzzi-dark p-4 rounded-lg font-bold shadow-lg transform rotate-3">
                            Sinds 2022
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Ontmoet Nick & Nees</h2>
                        <div className="h-1 w-20 bg-white mb-8"></div>
                        <p className="font-sans text-lg opacity-90 leading-relaxed mb-6">
                            Na ruim 40 jaar namen wij, Nick en Nees, het stokje over. Met respect voor de rijke traditie van Feduzzi voegen we onze eigen passie voor gastvrijheid en kwaliteit toe.
                        </p>
                        <p className="font-sans text-lg opacity-90 leading-relaxed italic">
                            "Ons doel is om u thuis te laten voelen in onze winkel, zodat u niet alleen een boodschap komt halen, maar ook een ervaring rijker bent."
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section - Split Cards */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-feduzzi-cream p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-feduzzi-red rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                        <h3 className="font-serif text-2xl mb-4 text-feduzzi-dark">Authentiek</h3>
                        <p className="text-gray-600">
                            We importeren onze producten rechtstreeks uit Italië. Van de fijnste olijfolie tot handgemaakte pasta's.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-2 border-feduzzi-olive/20 p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                        <div className="w-12 h-12 bg-feduzzi-olive rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                        <h3 className="font-serif text-2xl mb-4 text-feduzzi-dark">Vers</h3>
                        <p className="text-gray-600">
                            Elke dag bereiden onze chefs verse maaltijden, sauzen en desserts in eigen keuken. Proef het verschil van vers.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-feduzzi-dark text-white p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-feduzzi-dark font-bold text-xl mb-6">3</div>
                        <h3 className="font-serif text-2xl mb-4">Gezellig</h3>
                        <p className="text-gray-400">
                            Winkelen bij Feduzzi is een beleving. Een praatje, een proeverij en altijd een warm welkom.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OverOns;

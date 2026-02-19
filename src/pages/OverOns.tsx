import { IMAGES } from '../constants/images';

const OverOns = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Playful Layout */}
            <div className="pt-12 pb-20 px-4 md:px-8 bg-feduzzi-cream relative overflow-hidden">
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

                    <div className="flex-1 relative mt-12 md:mt-0">
                        <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.shelf} alt="Feduzzi Interieur" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-feduzzi-red rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* Meet the Owners - Green Section */}
            <section className="py-24 bg-feduzzi-olive text-white px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16 relative z-10">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block py-1 px-3 border border-feduzzi-olive text-feduzzi-olive rounded-full text-xs font-bold uppercase tracking-widest">
                            Onze Geschiedenis
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-feduzzi-dark leading-tight">
                            Al sinds 1981 een begrip in <span className="text-feduzzi-red italic">Amsterdam</span>
                        </h1>
                        <p className="font-sans text-gray-700 text-lg leading-relaxed">
                            Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één.
                            Wat begon als een kleine speciaalzaak is uitgegroeid tot dé plek voor authentiek Italiaans genieten.
                        </p>

                        <div className="p-6 bg-feduzzi-olive/10 rounded-xl border border-feduzzi-olive/20">
                            <h3 className="font-serif text-xl text-feduzzi-olive mb-3">Wie zijn wij?</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Wij zijn <strong>Nick en Nees Oostrum</strong>, twee broers die samen hun passie voor horeca, ondernemen en Italiaans eten delen.
                                Nick heeft 10 jaar ervaring met Italiaans eten, Italiaanse delicatessen en de Italiaanse cultuur.
                                Nees deed zijn ervaring op bij verschillende restaurants van Ron Blaauw.
                                Zo zijn wij, samen met een stel andere gedreven collega’s, het perfecte team om u een geweldige ervaring te geven in onze winkel in Amsterdam.
                                <br /><br />
                                <span className="font-serif italic text-feduzzi-dark">Wanneer komt u langs?</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative mt-12 md:mt-0 pt-8">
                        <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={IMAGES.shelf} alt="Feduzzi Interieur" className="w-full h-[600px] object-cover rounded-2xl shadow-2xl" />

                            {/* Floating Card for Cookies */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-feduzzi-gold hidden md:block">
                                <h4 className="font-serif text-lg text-feduzzi-dark mb-2">Onze Dolci</h4>
                                <p className="text-xs text-gray-600 italic">
                                    Een winkelplank met verschillende soorten biscotti en koekjes, waaronder Galletti, Batticuori, Pan Stell, Canestrini, Settembre, Baiocchi, Macine, Abbracci en Ritorne.
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-feduzzi-red rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>
            </section>

            {/* Green Quote Section */}
            <div className="bg-feduzzi-olive text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-5xl leading-tight italic">
                        “In cucina si buttano le briglie della creatività”
                    </h2>
                </div>
            </div>

            {/* "Wat is Feduzzi" Section - Cream Background */}
            <div className="py-20 px-4 md:px-8 bg-feduzzi-cream">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative group">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-feduzzi-gold/20 rounded-2xl z-0 transition-all duration-500 group-hover:top-4 group-hover:left-4"></div>
                        <img src={IMAGES.pasta} alt="Verse Pasta" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-lg" />
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="font-serif text-4xl text-feduzzi-dark">Wat is Feduzzi?</h2>
                        <div className="prose prose-lg text-gray-600 font-sans">
                            <p>
                                Wij verkopen broodjes, pasta’s, salades, wijnen, koffie, diverse soorten balsamico en olijfolie, kazen en vleeswaren.
                                Dit kan ook allemaal bij ons in de winkel gegeten en gedronken worden. Verder hebben wij ook allerlei mooie Italiaanse producten in onze mercado voor thuis.
                            </p>
                            <p>
                                Wij focussen ons het meest op afhaal. Denk aan belegde broodjes voor de lunch, een heerlijk diner voor thuis, borrelhapjes voor een feestje,
                                maar ook kunnen wij een menu voor u samenstellen voor bijvoorbeeld zakelijke lunches of diners.
                            </p>
                            <p className="font-bold text-feduzzi-olive">
                                Feduzzi bestaat al sinds 1981 en is dan ook de eerste Italiaanse delicatessenwinkel in Amsterdam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    </div>
    );
};

export default OverOns;

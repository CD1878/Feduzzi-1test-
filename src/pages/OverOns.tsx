import { IMAGES } from '../constants/images';

const OverOns = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center font-serif text-4xl md:text-5xl text-feduzzi-red mb-12 font-light">
                    Over Ons
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1 font-sans text-gray-700 leading-relaxed text-lg space-y-6">
                        <p>
                            Feduzzi Mercato Italiano is een begrip in Amsterdam en omstreken. Al sinds 1981 brengen wij de smaak van Italië naar Nederland. Wat begon als een kleine delicatessenwinkel is uitgegroeid tot een plek waar u terecht kunt voor de beste Italiaanse producten, verse maaltijden en catering.
                        </p>
                        <p>
                            In 2022 is Feduzzi overgenomen door Nick en Nees, twee ondernemers met een enorme passie voor Italië en lekker eten. Zij zetten de traditie voort met dezelfde toewijding en kwaliteit die u van Feduzzi gewend bent.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 h-96 overflow-hidden rounded-lg shadow-lg">
                        <img src={IMAGES.chefs} alt="Nick en Nees" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-feduzzi-cream p-12 rounded-lg text-center mb-20">
                    <h3 className="font-serif text-3xl text-feduzzi-green mb-6">Onze Missie</h3>
                    <p className="font-sans text-gray-700 text-lg max-w-2xl mx-auto italic">
                        "Wij willen onze klanten laten genieten van het echte Italiaanse leven. Met eerlijke producten, persoonlijke aandacht en een warme sfeer voelt iedereen zich bij ons thuis."
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OverOns;

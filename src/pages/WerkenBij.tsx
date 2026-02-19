const WerkenBij = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-serif text-4xl md:text-5xl text-feduzzi-red mb-8 font-light">
                    Werken bij Feduzzi
                </h1>
                <p className="font-sans text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
                    Heb jij passie voor Italiaans eten en gastvrijheid? Wij zijn altijd op zoek naar enthousiaste collega's om ons team te versterken.
                </p>

                <div className="space-y-6">
                    <div className="border border-gray-200 p-8 rounded-lg text-left hover:shadow-md transition-shadow">
                        <h3 className="font-serif text-2xl text-feduzzi-dark mb-2">Winkelmedewerker (Amsterdam)</h3>
                        <p className="text-gray-500 mb-4 font-sans uppercase text-xs tracking-wider">Parttime / Fulltime</p>
                        <p className="font-sans text-gray-700 mb-6">
                            Als winkelmedewerker ben jij het gezicht van Feduzzi. Je helpt klanten met het kiezen van de lekkerste producten en zorgt ervoor dat de winkel er piekfijn uitziet.
                        </p>
                        <a href="mailto:sollicitatie@feduzzi.nl" className="text-feduzzi-red font-bold hover:underline">Solliciteer direct &rarr;</a>
                    </div>

                    <div className="border border-gray-200 p-8 rounded-lg text-left hover:shadow-md transition-shadow">
                        <h3 className="font-serif text-2xl text-feduzzi-dark mb-2">Keukenhulp (Laren)</h3>
                        <p className="text-gray-500 mb-4 font-sans uppercase text-xs tracking-wider">Parttime / Oproepkracht</p>
                        <p className="font-sans text-gray-700 mb-6">
                            Vind je het leuk om in de keuken te staan en mee te helpen met het bereiden van onze gerechten? Dan zoeken wij jou!
                        </p>
                        <a href="mailto:sollicitatie@feduzzi.nl" className="text-feduzzi-red font-bold hover:underline">Solliciteer direct &rarr;</a>
                    </div>
                </div>

                <div className="mt-16">
                    <p className="text-gray-600">
                        Staat jouw ideale vacature er niet bij? Stuur een open sollicitatie naar <a href="mailto:info@feduzzi.nl" className="text-feduzzi-red underline">info@feduzzi.nl</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WerkenBij;

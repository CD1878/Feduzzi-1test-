import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { IMAGES } from '../constants/images';

const WerkenBij = () => {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const toggleJob = (jobId: string) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    const jobs = [
        {
            id: 'winkelmedewerker',
            title: 'Winkelmedewerker (Amsterdam)',
            type: 'PARTTIME / FULLTIME',
            description: 'Als winkelmedewerker ben jij het gezicht van Feduzzi. Je helpt klanten met het kiezen van de lekkerste producten en zorgt ervoor dat de winkel er piekfijn uitziet.'
        },
        {
            id: 'keukenhulp',
            title: 'Keukenhulp (Laren)',
            type: 'PARTTIME / OPROEPKRACHT',
            description: 'Vind je het leuk om in de keuken te staan en mee te helpen met het bereiden van onze gerechten? Dan zoeken wij jou!'
        }
    ];

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto">

                {/* Intro Section */}
                <div className="text-center mb-16">
                    <p className="font-serif italic text-2xl text-feduzzi-red mb-6">
                        “ La vera cucina italiana è una forma d'arte. Un dono per i sensi”
                    </p>
                    <h1 className="font-serif text-3xl md:text-5xl text-feduzzi-dark mb-8 leading-tight max-w-4xl mx-auto">
                        Wil jij ook werken bij de leukste Italiaan van Amsterdam en authentiek Italiaans leren koken?
                    </h1>
                    <p className="font-sans text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-lg">
                        Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen.
                        Ook bereik je ons <a href="tel:0206646464" className="underline font-bold text-feduzzi-red">telefonisch</a>. We kijken ernaar uit om je te leren kennen!
                    </p>
                </div>

                {/* Images & Quote Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="space-y-8">
                        <img
                            src={IMAGES.chefs}
                            alt="Het Feduzzi Team"
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <img
                            src={IMAGES.serviceCatering} // Using catering image as exterior placeholder based on description
                            alt="Feduzzi Exterieur"
                            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                        />
                        <blockquote className="bg-feduzzi-cream p-8 rounded-lg border-l-4 border-feduzzi-red">
                            <p className="font-serif text-2xl text-feduzzi-dark italic">
                                “Feduzzi is als een familie en zo voelt het ook om hier te werken.”
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* Job Listings with Expandable Forms */}
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                            <div className="p-8 bg-white">
                                <h3 className="font-serif text-2xl text-feduzzi-dark mb-2">{job.title}</h3>
                                <p className="text-gray-500 mb-4 font-sans uppercase text-xs tracking-wider font-bold">{job.type}</p>
                                <p className="font-sans text-gray-700 mb-6">
                                    {job.description}
                                </p>
                                <button
                                    onClick={() => toggleJob(job.id)}
                                    className="flex items-center text-feduzzi-red font-bold hover:underline uppercase tracking-wide text-sm"
                                >
                                    Solliciteer direct
                                    {expandedJob === job.id ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
                                </button>
                            </div>

                            {/* Expandable Form */}
                            {expandedJob === job.id && (
                                <div className="bg-gray-50 p-8 border-t border-gray-100 animate-fadeIn">
                                    <h4 className="font-serif text-xl mb-6">Solliciteer voor {job.title}</h4>
                                    <form className="max-w-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Voornaam (vereist)</label>
                                                <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Achternaam (vereist)</label>
                                                <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email (vereist)</label>
                                                <input type="email" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefoonnummer (vereist)</label>
                                                <input type="tel" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Geboortedatum (vereist)</label>
                                            <input type="date" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Waar wil je werken?</label>
                                            <select className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red bg-white">
                                                <option value="Amsterdam">Amsterdam</option>
                                                <option value="Laren">Laren</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Korte motivatie (vereist)</label>
                                            <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-feduzzi-red" required></textarea>
                                        </div>

                                        <button type="submit" className="bg-feduzzi-red text-white py-3 px-12 uppercase font-bold tracking-widest hover:bg-black transition-colors rounded-sm">
                                            Verzenden
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WerkenBij;

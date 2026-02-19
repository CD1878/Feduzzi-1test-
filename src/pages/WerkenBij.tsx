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
        <div className="bg-white min-h-screen">

            {/* Hero / Intro Section with Split Background */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-feduzzi-cream -z-10 rounded-bl-[100px] hidden md:block"></div>

                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative z-10">
                        <span className="inline-block py-1 px-3 border border-feduzzi-red text-feduzzi-red rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Join the Family
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-feduzzi-dark mb-8 leading-tight max-w-4xl mx-auto">
                            Wil jij ook werken bij de leukste Italiaan van <span className="text-feduzzi-red italic">Amsterdam</span>?
                        </h1>
                        <p className="font-sans text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto text-lg">
                            Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen.
                        </p>
                    </div>

                    {/* Images & Quote Section - Playful Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-center">
                        <div className="col-span-1 md:col-span-5 relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-feduzzi-olive rounded-lg z-0"></div>
                            <img
                                src="/images/team.jpg"
                                alt="Het Feduzzi Team"
                                className="w-full h-[400px] object-cover rounded-lg shadow-xl relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-7 md:pl-12">
                            <div className="bg-feduzzi-olive p-10 md:p-14 rounded-tr-[50px] rounded-bl-[50px] shadow-lg text-white relative">
                                <span className="absolute top-4 left-6 text-6xl opacity-30 font-serif">“</span>
                                <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed relative z-10">
                                    La vera cucina italiana è una forma d'arte. Un dono per i sensi.
                                </blockquote>
                                <div className="mt-6 flex items-center md:justify-end">
                                    <div className="h-px w-12 bg-white/50 mr-4"></div>
                                    <span className="uppercase text-xs font-bold tracking-widest opacity-90">Het Feduzzi Team</span>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
                                <p className="font-sans text-gray-600 text-sm md:text-base flex-1">
                                    "Feduzzi is als een familie en zo voelt het ook om hier te werken. Ambitie, passie en gezelligheid staan centraal."
                                </p>
                                <img
                                    src={IMAGES.chefs}
                                    alt="Chefs"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-feduzzi-cream shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Listings Section - Full Width Colored Background */}
            <div className="bg-feduzzi-cream py-20 px-4 md:px-8 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-feduzzi-red/10 rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-feduzzi-olive/10 rounded-tl-full"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Onze Vacatures</h2>

                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100">
                                    <div>
                                        <h3 className="font-serif text-2xl text-feduzzi-dark mb-2">{job.title}</h3>
                                        <div className="flex items-center gap-3 mb-4 md:mb-0">
                                            <span className="bg-feduzzi-olive/10 text-feduzzi-olive px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleJob(job.id)}
                                        className={`group flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${expandedJob === job.id
                                                ? 'bg-feduzzi-dark text-white'
                                                : 'bg-white border border-gray-200 text-feduzzi-dark hover:border-feduzzi-red hover:text-feduzzi-red'
                                            }`}
                                    >
                                        {expandedJob === job.id ? 'Sluiten' : 'Solliciteer Nu'}
                                        {expandedJob === job.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                </div>

                                <div className={`transition-all duration-500 ease-in-out bg-gray-50 overflow-hidden ${expandedJob === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-8 md:p-10">
                                        <p className="font-sans text-gray-700 mb-8 max-w-2xl leading-relaxed">
                                            {job.description}
                                        </p>
                                        <form className="max-w-3xl space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Voornaam *</label>
                                                    <input type="text" className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" placeholder="Je voornaam" required />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Achternaam *</label>
                                                    <input type="text" className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" placeholder="Je achternaam" required />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email *</label>
                                                    <input type="email" className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" placeholder="jouw@email.com" required />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Telefoonnummer *</label>
                                                    <input type="tel" className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" placeholder="06 12345678" required />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Geboortedatum *</label>
                                                <input type="date" className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" required />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Waar wil je werken?</label>
                                                <select className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm">
                                                    <option value="Amsterdam">Amsterdam</option>
                                                    <option value="Laren">Laren</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Korte motivatie *</label>
                                                <textarea rows={4} className="w-full p-3 bg-gray-50 border-0 border-b-2 border-transparent focus:border-feduzzi-red focus:bg-white transition-all outline-none rounded-t-sm" placeholder="Vertel ons waarom je bij Feduzzi wilt werken..." required></textarea>
                                            </div>

                                            <button type="submit" className="w-full md:w-auto bg-feduzzi-red text-white py-4 px-12 uppercase font-bold tracking-widest hover:bg-feduzzi-olive transition-colors rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                                Verstuur Sollicitatie
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WerkenBij;

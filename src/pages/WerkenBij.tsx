import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
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

            {/* Hero / Intro Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-feduzzi-olive/20 -z-10 rounded-bl-[200px] hidden md:block transform rotate-3"></div>

                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative z-10">
                        <span className="inline-block py-1 px-3 border border-feduzzi-olive text-feduzzi-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Join the Family
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-feduzzi-dark mb-8 leading-tight max-w-4xl mx-auto italic">
                            “La vera cucina italiana è una forma d'arte. Un dono per i sensi”
                        </h1>
                        <p className="font-sans text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-lg">
                            Wil jij ook werken bij de leukste Italiaan van Amsterdam en authentiek Italiaans leren koken?
                            Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen.
                            Ook bereik je ons telefonisch. We kijken ernaar uit om je te leren kennen!
                        </p>
                    </div>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {jobs.map((job) => (
                            <div key={job.id}
                                className={`p-8 rounded-2xl border-2 transition-all cursor-pointer ${expandedJob === job.id ? 'border-feduzzi-red bg-feduzzi-cream' : 'border-gray-100 hover:border-feduzzi-olive'}`}
                                onClick={() => toggleJob(job.id)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-serif text-2xl text-feduzzi-dark mb-2">{job.title}</h3>
                                        <span className="text-xs font-bold uppercase tracking-widest text-feduzzi-olive">{job.type}</span>
                                    </div>
                                    <div className={`p-2 rounded-full ${expandedJob === job.id ? 'bg-feduzzi-red text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>

                                {expandedJob === job.id && (
                                    <div className="mt-4 pt-4 border-t border-black/5 animate-fadeIn">
                                        <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                                        <button className="text-feduzzi-red font-bold uppercase text-xs tracking-widest hover:underline">
                                            Solliciteer Direct &rarr;
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Open Application Form Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
                        {/* Visuals */}
                        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative hidden lg:block">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-feduzzi-olive rounded-xl z-0"></div>
                            <img
                                src="/images/team.jpg"
                                alt="Het Feduzzi Team"
                                className="w-full h-[600px] object-cover rounded-xl shadow-xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
                                <p className="font-serif italic text-feduzzi-dark text-lg">
                                    “Feduzzi is als een familie en zo voelt het ook om hier te werken.”
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="col-span-1 md:col-span-12 lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-feduzzi-dark p-8 md:p-10 text-white">
                                    <h3 className="font-serif text-3xl mb-2">Solliciteer of Neem Contact Op</h3>
                                    <p className="text-white/80">Vul het formulier in voor een sollicitatie of algemene vragen.</p>
                                </div>

                                <form className="p-8 md:p-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Voornaam *</label>
                                            <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Achternaam *</label>
                                            <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email *</label>
                                            <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Telefoonnummer *</label>
                                            <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Waar gaat het over?</label>
                                        <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors">
                                            <option value="Sollicitatie">Ik wil solliciteren</option>
                                            <option value="Vraag">Ik heb een algemene vraag</option>
                                            <option value="Overig">Overig</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Bericht / Motivatie *</label>
                                        <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" placeholder="Vertel ons meer..." required></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-feduzzi-red text-white py-4 px-8 uppercase font-bold tracking-widest hover:bg-feduzzi-dark transition-colors rounded-lg shadow-lg transform active:scale-95">
                                        Verstuur Bericht
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WerkenBij;

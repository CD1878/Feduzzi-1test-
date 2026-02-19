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
            <div className="relative pt-12 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-feduzzi-olive/20 -z-10 rounded-bl-[200px] hidden md:block transform rotate-3"></div>

                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative z-10">
                        <span className="inline-block py-1 px-3 border border-feduzzi-olive text-feduzzi-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
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
                                className="w-full h-[400px] object-cover rounded-lg shadow-xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-7">
                            <div className="bg-feduzzi-cream p-10 rounded-2xl relative shadow-sm border border-feduzzi-olive/10">
                                <span className="text-6xl text-feduzzi-olive absolute top-4 left-6 font-serif opacity-30">"</span>
                                <p className="font-serif text-2xl md:text-3xl text-feduzzi-dark italic relative z-10 leading-snug">
                                    Feduzzi is als een familie en zo voelt het ook om hier te werken. Ambitie, passie en gezelligheid staan centraal.
                                </p>
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
    ))
}
                    </div >
                </div >
            </div >
        </div >
    );
};

export default WerkenBij;

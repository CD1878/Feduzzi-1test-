import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../constants/images';

const WerkenBij = () => {
    const { t } = useLanguage();
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const toggleJob = (jobId: string) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    const jobs = [
        {
            id: 'winkelmedewerker',
            title: t('winkelmedewerker_titel'),
            type: 'PARTTIME / FULLTIME',
            description: t('winkelmedewerker_desc')
        },
        {
            id: 'keukenhulp',
            title: t('keukenhulp_titel'),
            type: 'PARTTIME / OPROEPKRACHT',
            description: t('keukenhulp_desc')
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* Hero / Intro Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-feduzzi-olive/20 -z-10 rounded-bl-[200px] hidden md:block transform rotate-3"></div>

                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative z-10">
                        <span className="inline-block py-1 px-3 border border-[#7F9F7B] text-[#7F9F7B] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            {t('join_family')}
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-feduzzi-dark mb-8 leading-tight max-w-4xl mx-auto italic">
                            {t('werken_bij_titel')}
                        </h1>
                        <p className="font-sans text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-lg">
                            {t('werken_bij_intro')}
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
                                            {t('solliciteer_direct')} &rarr;
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
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#7F9F7B] rounded-xl z-0"></div>

                            <div className="w-full h-[600px] rounded-xl shadow-xl relative z-10 overflow-hidden group">
                                <img
                                    src={IMAGES.chefs}
                                    alt="Feduzzi Team"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs border border-gray-100">
                                <p className="font-serif italic text-feduzzi-dark text-lg">
                                    {t('quote_familie')}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="col-span-1 md:col-span-12 lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-[#7F9F7B] p-8 md:p-10 text-white">
                                    <h3 className="font-serif text-3xl mb-2">{t('solliciteer_contact_titel')}</h3>
                                    <p className="text-white/80">{t('solliciteer_contact_sub')}</p>
                                </div>

                                <form className="p-8 md:p-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('voornaam')} *</label>
                                            <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('achternaam')} *</label>
                                            <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('email')} *</label>
                                            <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('telefoonnummer')} *</label>
                                            <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('waar_gaat_het_over')}</label>
                                        <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors">
                                            <option value="Sollicitatie">{t('ik_wil_solliciteren')}</option>
                                            <option value="Vraag">{t('ik_heb_vraag')}</option>
                                            <option value="Overig">{t('overig')}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('bericht_motivatie')} *</label>
                                        <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-feduzzi-olive transition-colors" placeholder="..." required></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-feduzzi-red text-white py-4 px-8 uppercase font-bold tracking-widest hover:bg-feduzzi-dark transition-colors rounded-lg shadow-lg transform active:scale-95">
                                        {t('verstuur_bericht')}
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

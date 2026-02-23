import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

interface CateringModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CateringModal: React.FC<CateringModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        setSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-feduzzi-red transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="p-8">
                    {!submitted ? (
                        <>
                            <h2 className="font-serif text-3xl text-feduzzi-dark mb-2">{t('offerte_aanvragen')}</h2>
                            <p className="text-gray-600 mb-6 text-sm">
                                {t('catering_contact_text')}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('naam')}</label>
                                    <input type="text" required className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('email')}</label>
                                        <input type="email" required className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('telefoon')}</label>
                                        <input type="tel" className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('datum')}</label>
                                        <input type="date" required className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('aantal_personen')}</label>
                                        <input type="number" min="1" className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('type_event')}</label>
                                    <select className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors bg-white">
                                        <option value="">{t('type_event_placeholder')}</option>
                                        <option value="prive">{t('event_prive')}</option>
                                        <option value="zakelijk">{t('event_zakelijk')}</option>
                                        <option value="bruiloft">{t('event_bruiloft')}</option>
                                        <option value="overig">{t('event_overig')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('bericht')}</label>
                                    <textarea rows={3} className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-feduzzi-red transition-colors"></textarea>
                                </div>

                                <div className="pt-2">
                                    <button type="submit" className="w-full bg-feduzzi-red text-white py-4 uppercase text-sm font-bold tracking-widest rounded-sm hover:bg-feduzzi-dark transition-colors shadow-lg">
                                        {t('verstuur')}
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="font-serif text-3xl text-feduzzi-dark mb-4">{t('bedankt_titel')}</h2>
                            <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                                {t('bedankt_text')}
                            </p>
                            <button onClick={onClose} className="bg-gray-800 text-white px-8 py-3 uppercase text-xs font-bold tracking-widest rounded-sm hover:bg-black transition-colors">
                                {t('sluit')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CateringModal;

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface Translations {
    [key: string]: {
        nl: string;
        en: string;
    };
}

const translations: Translations = {
    // Header
    'menu': { nl: 'Menu', en: 'Menu' },
    'sfeer': { nl: 'Sfeer', en: 'Atmosphere' },
    'over_ons': { nl: 'Over ons', en: 'About us' },
    'werken_bij': { nl: 'Werken bij', en: 'Jobs' },
    'vestigingen': { nl: 'Vestigingen', en: 'Locations' },
    'bestel_broodjes': { nl: 'Bestel broodjes', en: 'Order Sandwiches' },

    // Announcement Bar
    'nieuwe_vestiging': { nl: 'nieuwe vestiging', en: 'new location' },
    'nu_open': { nl: 'nu open!', en: 'now open!' },

    // Hero
    'hero_title': { nl: 'Fresh Italian Take-Away & Catering', en: 'Fresh Italian Take-Away & Catering' },
    'hero_subtitle': { nl: 'Traiteur - Lunch - Italiaanse Delicatessen', en: 'Traiteur - Lunch - Italian Delicacies' },
    'bestel_catering': { nl: 'Bestel catering', en: 'Order catering' },

    // Footer
    'bestellen': { nl: 'Bestellen', en: 'Order' },
    'volg_ons': { nl: 'Volg ons', en: 'Follow us' },
    'online_broodjes': { nl: 'Online broodjes', en: 'Online sandwiches' },
    'catering_amsterdam': { nl: 'Catering Amsterdam', en: 'Catering Amsterdam' },
    'catering_laren': { nl: 'Catering Laren', en: 'Catering Laren' },
    'maaltijden': { nl: 'Maaltijden', en: 'Meals' },
    'traiteur': { nl: 'Traiteur', en: 'Deli' },
    'catering': { nl: 'Catering', en: 'Catering' },

    // General
    'lees_meer': { nl: 'Lees meer', en: 'Read more' },
    'bekijk_menu': { nl: 'Bekijk menu', en: 'View menu' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('nl');

    const t = (key: string) => {
        const entry = translations[key];
        if (!entry) {
            console.warn(`Translation key '${key}' not found.`);
            return key;
        }
        return entry[language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

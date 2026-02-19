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

    // Generic
    'lees_meer': { nl: 'Lees meer', en: 'Read more' },
    'bekijk_menu': { nl: 'Bekijk menu', en: 'View menu' },
    'bekijk_aanbod': { nl: 'Bekijk ons aanbod', en: 'View our selection' },
    'neem_contact_op': { nl: 'Neem Contact Op', en: 'Contact Us' },
    'naam': { nl: 'Naam', en: 'Name' },
    'email': { nl: 'Email', en: 'Email' },
    'telefoonnummer': { nl: 'Telefoonnummer', en: 'Phone number' },
    'onderwerp': { nl: 'Onderwerp', en: 'Subject' },
    'bericht': { nl: 'Bericht', en: 'Message' },
    'verstuur_bericht': { nl: 'Verstuur Bericht', en: 'Send Message' },
    'algemene_vraag': { nl: 'Algemene vraag', en: 'General question' },
    'sollicitatie': { nl: 'Sollicitatie', en: 'Job Application' },

    // Over Ons
    'over_ons_titel': { nl: 'Al sinds 1981', en: 'Since 1981' },
    'over_ons_subtitel': { nl: 'een begrip in Amsterdam', en: 'a household name in Amsterdam' },
    'over_ons_intro': { nl: 'Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één. Wat begon als een kleine speciaalzaak is uitgegroeid tot dé plek voor authentiek Italiaans genieten.', en: 'Feduzzi Mercato Italiano is an Italian delicatessen, lunchroom and caterer in one. What started as a small specialty shop has grown into the place for authentic Italian enjoyment.' },
    'het_team': { nl: 'Het Team', en: 'The Team' },
    'passie_voor': { nl: 'Passie voor', en: 'Passion for' },
    'italiaans_eten': { nl: 'Italiaans Eten', en: 'Italian Food' },
    'wie_zijn_wij': { nl: 'Wie zijn wij?', en: 'Who are we?' },
    'wie_zijn_wij_tekst': { nl: 'Wij zijn Nick en Nees Oostrum, twee broers die samen hun passie voor horeca, ondernemen en Italiaans eten delen.', en: 'We are Nick and Nees Oostrum, two brothers who share their passion for hospitality, entrepreneurship and Italian food.' },
    'quote_team': { nl: '"Samen met ons team zorgen wij voor een warme, authentieke Italiaanse ervaring."', en: '"Together with our team we ensure a warm, authentic Italian experience."' },
    'onze_dolci': { nl: 'Onze Dolci', en: 'Our Dolci' },
    'dolci_tekst': { nl: 'Proef onze huisgemaakte biscotti en koekjes. Een perfecte afsluiting van uw maaltijd.', en: 'Taste our homemade biscotti and cookies. A perfect ending to your meal.' },
    'wat_is_feduzzi': { nl: 'Wat is Feduzzi?', en: 'What is Feduzzi?' },
    'wat_is_feduzzi_text1': { nl: 'Wij verkopen broodjes, pasta’s, salades, wijnen, koffie, diverse soorten balsamico en olijfolie, kazen en vleeswaren. Allemaal om direct van te genieten in onze winkel of thuis.', en: 'We sell sandwiches, pastas, salads, wines, coffee, various types of balsamic and olive oil, cheeses and cured meats. All to enjoy directly in our store or at home.' },
    'wat_is_feduzzi_text2': { nl: 'Wij focussen ons het meest op afhaal. Van belegde broodjes voor de lunch tot een heerlijk diner voor thuis en borrelhapjes voor een feestje. Ook stellen wij graag een menu samen voor zakelijke lunches.', en: 'We focus mostly on take-away. From sandwiches for lunch to a delicious dinner for home and snacks for a party. We are also happy to put together a menu for business lunches.' },

    // Vestigingen
    'kom_langs': { nl: 'Kom langs', en: 'Visit us' },
    'onze_vestigingen': { nl: 'Onze Vestigingen', en: 'Our Locations' },
    'locatie': { nl: 'Locatie', en: 'Location' },
    'contact': { nl: 'Contact', en: 'Contact' },
    'openingstijden': { nl: 'Openingstijden', en: 'Opening Hours' },
    'routebeschrijving': { nl: 'Routebeschrijving', en: 'Directions' },
    'heeft_u_een_vraag': { nl: 'Heeft u een vraag?', en: 'Do you have a question?' },
    'vestigingen_intro_vraag': { nl: 'Wilt u meer weten over onze catering, producten of heeft u een andere vraag? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.', en: 'Do you want to know more about our catering, products or do you have another question? Fill in the form and we will contact you as soon as possible.' },

    // Werken Bij
    'join_family': { nl: 'Join the Family', en: 'Join the Family' },
    'solliciteer_direct': { nl: 'Solliciteer Direct', en: 'Apply Now' },
    'waar_gaat_het_over': { nl: 'Waar gaat het over?', en: 'What is this regarding?' },
    'ik_wil_solliciteren': { nl: 'Ik wil solliciteren', en: 'I want to apply' },
    'ik_heb_vraag': { nl: 'Ik heb een algemene vraag', en: 'I have a general question' },
    'overig': { nl: 'Overig', en: 'Other' },
    'werken_bij_titel': { nl: '"La vera cucina italiana è una forma d\'arte. Un dono per i sensi"', en: '"La vera cucina italiana è una forma d\'arte. Un dono per i sensi"' },
    'werken_bij_intro': { nl: 'Wil jij ook werken bij de leukste Italiaan van Amsterdam en authentiek Italiaans leren koken? Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen. Ook bereik je ons telefonisch. We kijken ernaar uit om je te leren kennen!', en: 'Do you want to work at the nicest Italian in Amsterdam and learn to cook authentic Italian food? Fill in the form below, after which we will contact you quickly to discuss your application further and possibly plan a non-binding trial day. You can also reach us by phone. We look forward to meeting you!' },
    'winkelmedewerker_titel': { nl: 'Winkelmedewerker (Amsterdam)', en: 'Shop Assistant (Amsterdam)' },
    'winkelmedewerker_desc': { nl: 'Als winkelmedewerker ben jij het gezicht van Feduzzi. Je helpt klanten met het kiezen van de lekkerste producten en zorgt ervoor dat de winkel er piekfijn uitziet.', en: 'As a shop assistant you are the face of Feduzzi. You help customers choose the tastiest products and ensure that the store looks spick and span.' },
    'keukenhulp_titel': { nl: 'Keukenhulp (Laren)', en: 'Kitchen Assistant (Laren)' },
    'keukenhulp_desc': { nl: 'Vind je het leuk om in de keuken te staan en mee te helpen met het bereiden van onze gerechten? Dan zoeken wij jou!', en: 'Do you like being in the kitchen and helping to prepare our dishes? Then we are looking for you!' },
    'solliciteer_contact_titel': { nl: 'Solliciteer of Neem Contact Op', en: 'Apply or Contact Us' },
    'solliciteer_contact_sub': { nl: 'Vul het formulier in voor een sollicitatie of algemene vragen.', en: 'Fill in the form for an application or general questions.' },
    'voornaam': { nl: 'Voornaam', en: 'First Name' },
    'achternaam': { nl: 'Achternaam', en: 'Last Name' },
    'bericht_motivatie': { nl: 'Bericht / Motivatie', en: 'Message / Motivation' },
    'quote_familie': { nl: '"Feduzzi is als een familie en zo voelt het ook om hier te werken."', en: '"Feduzzi is like a family and that is how it feels to work here."' },
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

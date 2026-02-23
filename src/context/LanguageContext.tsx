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
    'catering': { nl: 'Catering', en: 'Catering' },
    'bestel_broodjes': { nl: 'Bestel hier', en: 'Order here' },

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
    'wist_je_dat_titel': { nl: 'Wist je dat?', en: 'Did you know?' },
    'wist_je_dat_text': { nl: 'Naast broers zijn wij ook beste vrienden. Samen zorgen we voor die unieke, familiale Feduzzi sfeer!', en: 'Besides being brothers, we are also best friends. Together we ensure that unique, family-like Feduzzi atmosphere!' },
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

    // Services
    'italiaanse_delicatessen': { nl: 'Italiaanse Delicatessen', en: 'Italian Delicacies' },
    'service_maaltijden_titel': { nl: 'Maaltijden', en: 'Meals' },
    'service_maaltijden_desc': { nl: "Heerlijke maaltijden van (vega)lasagne's tot authentieke pasta's en verfijnde desserts. Bekijk ons uitgebreide menu via de button hieronder", en: "Delicious meals from (veggie) lasagnas to authentic pastas and refined desserts. View our extensive menu via the button below" },
    'bekijk_maaltijden': { nl: 'Bekijk het maaltijden menu', en: 'View meal menu' },
    'service_broodjes_titel': { nl: 'Broodjes', en: 'Sandwiches' },
    'service_broodjes_desc': { nl: 'Royaal belegde Italiaanse broodjes om van te genieten tijdens de lunchpauze. Bestel jouw favoriet via de knop hieronder', en: 'Generously filled Italian sandwiches to enjoy during your lunch break. Order your favorite via the button below' },
    'bekijk_broodjes': { nl: 'Bekijk broodjes', en: 'View sandwiches' },
    'service_traiteur_titel': { nl: 'Traiteur', en: 'Catering' },
    'service_traiteur_desc': { nl: 'Verse bereide maaltijden voor bijzondere (zakelijke) gelegenheden die we aan de deur komen brengen of die je gemakkelijk ophaalt bij ons. Bekijk ons uitgebreide overzicht', en: 'Freshly prepared meals for special (business) occasions that we deliver to your door or that you can easily pick up from us. View our extensive overview' },
    'bekijk_catering': { nl: 'Bekijk het catering menu', en: 'View catering menu' },

    // Menu Page
    'la_dolce_vita': { nl: 'La Dolce Vita', en: 'La Dolce Vita' },
    'ons_menu': { nl: 'Ons Menu', en: 'Our Menu' },
    'menu_intro': { nl: 'Geniet van onze authentieke Italiaanse gerechten, vers bereid met de beste ingrediënten. Van rijk belegde broodjes tot complete maaltijden voor thuis.', en: 'Enjoy our authentic Italian dishes, freshly prepared with the best ingredients. From richly filled sandwiches to complete meals for home.' },
    'stap_1_titel': { nl: 'Kies & Selecteer', en: 'Choose & Select' },
    'stap_1_desc': { nl: 'Bekijk onze gerechten en kies het aantal personen. Alles wordt vers voor u bereid.', en: 'View our dishes and choose the number of people. Everything is freshly prepared for you.' },
    'stap_2_titel': { nl: 'Bestel & Betaal', en: 'Order & Pay' },
    'stap_2_desc': { nl: 'Plaats uw bestelling eenvoudig online. U ontvangt direct een bevestiging.', en: 'Place your order easily online. You will receive a confirmation immediately.' },
    'stap_3_titel': { nl: 'Ophalen', en: 'Pick Up' },
    'stap_3_desc_start': { nl: 'Haal uw bestelling op de gekozen datum.', en: 'Pick up your order on the chosen date.' },
    'stap_3_desc_end': { nl: 'Bestel minimaal 24 uur van tevoren.', en: 'Order at least 24 hours in advance.' },
    'dieetwensen_titel': { nl: 'Heeft u specifieke dieetwensen?', en: 'Do you have specific dietary requirements?' },
    'dieetwensen_desc': { nl: 'Wij houden graag rekening met allergieën of andere wensen. Vraag onze medewerkers naar de mogelijkheden of neem contact met ons op.', en: 'We are happy to take into account allergies or other wishes. Ask our staff about the possibilities or contact us.' },

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

    // Intro
    'intro_title': { nl: 'Feduzzi Mercato Italiano', en: 'Feduzzi Mercato Italiano' },
    'intro_p1': { nl: 'Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één. Feduzzi heeft zich in 1981 gevestigd in Amsterdam en is sinds 2022 overgenomen door Nick en Nees.', en: 'Feduzzi Mercato Italiano is an Italian delicatessen, lunchroom and caterer in one. Feduzzi was established in Amsterdam in 1981 and was taken over by Nick and Nees in 2022.' },
    'intro_p2': { nl: 'Feduzzi staat voor kwaliteit en gastvrijheid. Ons doel is dan ook om u thuis te laten voelen in onze winkel, zodat u niet alleen een boodschap komt halen, maar ook een ervaring rijker bent. Denk aan Italiaanse vlees-, vis- en vegagerechten, maar ook aan een rijk assortiment Italiaanse delicatessen die u niet snel ergens anders tegenkomt.', en: 'Feduzzi stands for quality and hospitality. Our goal is to make you feel at home in our store, so that you not only come to get a grocery item, but also gain an experience. Think of Italian meat, fish and vegetarian dishes, but also a rich assortment of Italian delicacies that you will not easily find anywhere else.' },
    'intro_p3_start': { nl: 'Vriendelijk personeel, Italiaanse muziek en een prachtige winkels in ', en: 'Friendly staff, Italian music and beautiful stores in ' },
    'intro_p3_mid': { nl: ' en ', en: ' and ' },
    'intro_p3_end': { nl: ' waar het lijkt alsof u echt in Italië bent. Wij staan voor u klaar. Wanneer zien wij u bij ons in de winkel?', en: ' where it seems like you are really in Italy. We are ready for you. When will we see you in our store?' },
    'meer_over_ons': { nl: 'Meer over ons', en: 'More about us' },

    // Sfeer
    'sfeer_titel': { nl: 'De Sfeer', en: 'The Atmosphere' },
    'sfeer_desc': { nl: 'Beleef de authentieke Italiaanse sfeer in onze winkels. Van de geur van verse kruiden tot het geluid van Italiaanse muziek op de achtergrond.', en: 'Experience the authentic Italian atmosphere in our stores. From the smell of fresh herbs to the sound of Italian music in the background.' },

    // Footer Extras
    'cookie_privacy': { nl: 'Cookieverklaring | Privacyverklaring', en: 'Cookie Statement | Privacy Statement' },
    'all_rights': { nl: 'Alle rechten voorbehouden', en: 'All rights reserved' },

    // Days & Time
    'maandag': { nl: 'Maandag', en: 'Monday' },
    'dinsdag': { nl: 'Dinsdag', en: 'Tuesday' },
    'woensdag': { nl: 'Woensdag', en: 'Wednesday' },
    'donderdag': { nl: 'Donderdag', en: 'Thursday' },
    'vrijdag': { nl: 'Vrijdag', en: 'Friday' },
    'zaterdag': { nl: 'Zaterdag', en: 'Saturday' },
    'zondag': { nl: 'Zondag', en: 'Sunday' },
    'gesloten': { nl: 'Gesloten', en: 'Closed' },

    // Cart & Product
    'winkelmandje': { nl: 'Winkelmandje', en: 'Shopping Cart' },
    'winkelmandje_leeg': { nl: 'Je winkelmandje is nog leeg.', en: 'Your shopping cart is empty.' },
    'verder_winkelen': { nl: 'Verder winkelen', en: 'Continue shopping' },
    'totaal': { nl: 'Totaal', en: 'Total' },
    'afrekenen': { nl: 'Afrekenen', en: 'Checkout' },
    'in_winkelmand': { nl: 'In Winkelmand', en: 'Add to Cart' },
    'persoon': { nl: 'persoon', en: 'person' },
    'personen': { nl: 'personen', en: 'people' },
    'broodjes_plain': { nl: 'Broodjes', en: 'Sandwiches' },
    'catering_optie': { nl: 'Catering', en: 'Catering' },

    // Catering Page
    'catering_titel': { nl: 'Catering & Events', en: 'Catering & Events' },
    'catering_subtitel': { nl: 'De Smaak van Italië op Locatie', en: 'The Taste of Italy on Location' },
    'catering_intro': { nl: 'Van intieme diners tot grote bedrijfsfeesten: wij brengen de authentieke Italiaanse keuken naar u toe. Laat ons uw evenement onvergetelijk maken met de smaken van Feduzzi.', en: 'From intimate dinners to large corporate parties: we bring authentic Italian cuisine to you. Let us make your event unforgettable with the flavors of Feduzzi.' },
    'feesten_partijen': { nl: 'Feesten & Partijen', en: 'Parties & Events' },
    'feesten_text': { nl: 'Iets te vieren? Wij verzorgen de catering voor verjaardagen, bruiloften en andere feestelijke gelegenheden. Geniet van onze antipasti, pasta\'s en dolci, vers bereid en met liefde geserveerd.', en: 'Something to celebrate? We provide catering for birthdays, weddings and other festive occasions. Enjoy our antipasti, pastas and dolci, freshly prepared and served with love.' },
    'zakelijk': { nl: 'Zakelijk & Events', en: 'Corporate & Events' },
    'zakelijk_text': { nl: 'Indruk maken op uw klanten of collega\'s? Onze zakelijke catering opties variëren van luxe broodjeslunchen tot uitgebreide buffetten en borrels. Wij denken graag met u mee.', en: 'Want to impress your clients or colleagues? Our corporate catering options range from luxury sandwich lunches to extensive buffets and drinks. We are happy to think along with you.' },
    'catering_contact_titel': { nl: 'Interesse?', en: 'Interested?' },
    'catering_contact_text': { nl: 'Neem contact met ons op voor een offerte op maat.', en: 'Contact us for a custom quote.' },
    'offerte_aanvragen': { nl: 'Offerte Aanvragen', en: 'Request Quote' },
    'bekijk_menu_opties': { nl: 'Bekijk Menu Opties', en: 'View Menu Options' },

    // Catering Modal
    'naam': { nl: 'Naam', en: 'Name' },
    'email': { nl: 'Email', en: 'Email' },
    'telefoon': { nl: 'Telefoonnummer', en: 'Phone Number' },
    'datum': { nl: 'Datum', en: 'Date' },
    'aantal_personen': { nl: 'Aantal Personen', en: 'Number of Guests' },
    'type_event': { nl: 'Type Evenement', en: 'Event Type' },
    'type_event_placeholder': { nl: 'Kies een type...', en: 'Choose a type...' },
    'event_prive': { nl: 'Privé Feest', en: 'Private Party' },
    'event_zakelijk': { nl: 'Zakelijk Event', en: 'Corporate Event' },
    'event_bruiloft': { nl: 'Bruiloft', en: 'Wedding' },
    'event_overig': { nl: 'Overig', en: 'Other' },
    'bericht': { nl: 'Bericht / Dieetwensen', en: 'Message / Dietary Requirements' },
    'verstuur': { nl: 'Verstuur Aanvraag', en: 'Send Request' },
    'annuleer': { nl: 'Annuleer', en: 'Cancel' },
    'bedankt_titel': { nl: 'Bedankt!', en: 'Thank You!' },
    'bedankt_text': { nl: 'We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.', en: 'We have received your request and will contact you as soon as possible.' },
    'sluit': { nl: 'Sluit', en: 'Close' },
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

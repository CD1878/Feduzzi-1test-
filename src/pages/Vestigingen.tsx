import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { IMAGES } from '../constants/images';

const LOCATIONS = [
    {
        city: "Amsterdam",
        address: "Scheldestraat 63",
        zip: "1078 GH Amsterdam",
        phone: "020-6646365",
        email: "info@feduzzi.nl",
        hours: [
            "Maandag - Vrijdag: 10:30 - 18:00",
            "Zaterdag: 10:00 - 17:00",
            "Zondag: Gesloten"
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.666636737337!2d4.8911223!3d52.3405786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6098020555555%3A0x676767676767!2sFeduzzi!5e0!3m2!1snl!2snl!4v1600000000000!5m2!1snl!2snl",
        image: IMAGES.shelf // Placeholder
    },
    {
        city: "Laren",
        address: "Torenlaan 8",
        zip: "1251 HJ Laren",
        phone: "0622038090",
        email: "laren@feduzzi.nl",
        hours: [
            "Maandag: 11:00 - 18:30",
            "Dinsdag - Vrijdag: 10:00 - 18:30",
            "Zaterdag: 10:00 - 17:00",
            "Zondag: Gesloten"
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0560877990176!2d5.224376376916854!3d52.25757757200583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c616f7311d4d3d%3A0x1c8b9d3b38150f81!2sNieuweweg%2012%2C%201251%20LJ%20Laren!5e0!3m2!1snl!2snl!4v1709123456789!5m2!1snl!2snl",
        image: IMAGES.serviceCatering // Placeholder
    }
];

const Vestigingen = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="pt-32 pb-16 bg-feduzzi-cream relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-feduzzi-olive/10 rounded-br-full"></div>
                <div className="text-center relative z-10">
                    <span className="text-feduzzi-red font-bold uppercase tracking-widest text-xs mb-4 block">Kom langs</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-feduzzi-dark">Onze Vestigingen</h1>
                </div>
            </div>

            {/* Locations */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-32">
                {LOCATIONS.map((loc, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>

                        {/* Map & Image Visuals */}
                        <div className="flex-1 w-full relative group">
                            <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full border-2 border-feduzzi-gold rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                            <div className="relative z-10 h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                                <iframe
                                    src={loc.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Kaart van ${loc.city}`}
                                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                                ></iframe>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="flex-1 w-full">
                            <h2 className="font-serif text-4xl md:text-5xl text-feduzzi-dark mb-8 flex items-center gap-4">
                                <span className="bg-feduzzi-olive text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md">
                                    {index + 1}
                                </span>
                                {loc.city}
                            </h2>

                            <div className="space-y-8 font-sans">
                                <div className="flex items-start p-6 bg-feduzzi-cream rounded-xl hover:shadow-md transition-shadow">
                                    <MapPin className="text-feduzzi-red mt-1 mr-4 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Locatie</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {loc.address}<br />
                                            {loc.zip}
                                        </p>
                                        <a
                                            href={`https://maps.google.com/?q=${loc.address}, ${loc.zip}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-feduzzi-red text-xs font-bold uppercase tracking-widest mt-3 hover:underline"
                                        >
                                            <Navigation size={14} className="mr-2" /> Routebeschrijving
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-6 border border-gray-100 rounded-xl hover:border-feduzzi-olive transition-colors">
                                        <div className="flex items-center mb-3">
                                            <Phone className="text-feduzzi-olive mr-3" size={20} />
                                            <h3 className="font-bold text-gray-900">Contact</h3>
                                        </div>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <a href={`tel:${loc.phone}`} className="block hover:text-feduzzi-red">{loc.phone}</a>
                                            <a href={`mailto:${loc.email}`} className="block hover:text-feduzzi-red">{loc.email}</a>
                                        </div>
                                    </div>

                                    <div className="p-6 border border-gray-100 rounded-xl hover:border-feduzzi-olive transition-colors">
                                        <div className="flex items-center mb-3">
                                            <Clock className="text-feduzzi-olive mr-3" size={20} />
                                            <h3 className="font-bold text-gray-900">Openingstijden</h3>
                                        </div>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {loc.hours.map((hour, i) => (
                                                <li key={i}>{hour}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Form Section */}
            <div className="bg-feduzzi-olive py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full"></div>
                <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-white/80 font-bold uppercase tracking-widest text-xs mb-4 block">Heeft u een vraag?</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Neem Contact Op</h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto">
                            Wilt u meer weten over onze catering, producten of heeft u een andere vraag?
                            Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                        </p>
                    </div>

                    <form className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Naam *</label>
                                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-feduzzi-olive focus:bg-white transition-all outline-none rounded-lg" placeholder="Uw naam" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email *</label>
                                <input type="email" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-feduzzi-olive focus:bg-white transition-all outline-none rounded-lg" placeholder="uw@email.nl" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Telefoonnummer</label>
                                <input type="tel" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-feduzzi-olive focus:bg-white transition-all outline-none rounded-lg" placeholder="06 12345678" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Onderwerp</label>
                                <select className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-feduzzi-olive focus:bg-white transition-all outline-none rounded-lg">
                                    <option>Algemene vraag</option>
                                    <option>Catering</option>
                                    <option>Sollicitatie</option>
                                    <option>Overige</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Bericht *</label>
                            <textarea rows={5} className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-feduzzi-olive focus:bg-white transition-all outline-none rounded-lg" placeholder="Waar kunnen we u mee helpen?" required></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button type="submit" className="bg-feduzzi-red text-white py-4 px-12 uppercase font-bold tracking-widest hover:bg-feduzzi-dark transition-colors rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Verstuur Bericht
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Vestigingen;

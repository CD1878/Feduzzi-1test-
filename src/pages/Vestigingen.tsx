import { MapPin, Phone, Clock } from 'lucide-react';

const LOCATIONS = [
    {
        city: "Amsterdam",
        address: "Scheldestraat 63",
        zip: "1078 GH Amsterdam",
        phone: "020 664 64 64",
        hours: [
            "Ma - Vr: 09:00 - 19:00",
            "Za: 09:00 - 18:00",
            "Zo: 12:00 - 18:00"
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.666636737337!2d4.8911223!3d52.3405786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6098020555555%3A0x676767676767!2sFeduzzi!5e0!3m2!1snl!2snl!4v1600000000000!5m2!1snl!2snl"
    },
    {
        city: "Laren",
        address: "Nieuweweg 12",
        zip: "1251 LJ Laren",
        phone: "035 531 11 11",
        hours: [
            "Ma: Gesloten",
            "Di - Vr: 09:30 - 18:00",
            "Za: 09:30 - 17:00",
            "Zo: Gesloten"
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0560877990176!2d5.224376376916854!3d52.25757757200583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c616f7311d4d3d%3A0x1c8b9d3b38150f81!2sNieuweweg%2012%2C%201251%20LJ%20Laren!5e0!3m2!1snl!2snl!4v1709123456789!5m2!1snl!2snl"
    }
];

const Vestigingen = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-feduzzi-cream min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-center font-serif text-4xl md:text-5xl text-feduzzi-red mb-16 font-light">
                    Onze Vestigingen
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {LOCATIONS.map((loc, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 w-full bg-gray-200 relative group">
                                <iframe
                                    src={loc.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Kaart van ${loc.city}`}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                            <div className="p-8">
                                <h3 className="font-serif text-3xl text-feduzzi-dark mb-6 border-b border-gray-100 pb-4">{loc.city}</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <MapPin className="text-feduzzi-red mt-1 mr-3 flex-shrink-0" size={20} />
                                        <p className="font-sans text-gray-700">
                                            {loc.address}<br />
                                            {loc.zip}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="text-feduzzi-red mr-3 flex-shrink-0" size={20} />
                                        <p className="font-sans text-gray-700">{loc.phone}</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="text-feduzzi-red mt-1 mr-3 flex-shrink-0" size={20} />
                                        <ul className="font-sans text-gray-700 text-sm space-y-1">
                                            {loc.hours.map((hour, i) => (
                                                <li key={i}>{hour}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <a
                                    href={`https://maps.google.com/?q=${loc.address}, ${loc.zip}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-transparent border border-feduzzi-red text-feduzzi-red hover:bg-feduzzi-red hover:text-white py-3 uppercase text-xs font-bold tracking-widest transition-all duration-300 rounded-sm"
                                >
                                    Routebeschrijving
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vestigingen;

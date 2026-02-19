import { IMAGES } from '../constants/images';

const GALLERY_IMAGES = [
    { src: IMAGES.shelf, alt: "Winkel sfeer" },
    { src: IMAGES.meatballs, alt: "Verse gehaktballen" },
    { src: IMAGES.chefs, alt: "Onze chefs" },
    { src: IMAGES.sandwich, alt: "Broodjes vitrine" },
    { src: IMAGES.pasta, alt: "Verse pasta" },
    { src: IMAGES.bag, alt: "Feduzzi tas" },
    { src: IMAGES.serviceCatering, alt: "Catering" },
    { src: IMAGES.footerLogo, alt: "Logo detail" }, // Placeholder, ideally use another image
];

const Sfeer = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="font-serif text-4xl md:text-5xl text-feduzzi-red mb-8 font-light">
                    De Sfeer
                </h1>
                <p className="font-sans text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
                    Beleef de authentieke Italiaanse sfeer in onze winkels. Van de geur van verse kruiden tot het geluid van Italiaanse muziek op de achtergrond.
                </p>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {GALLERY_IMAGES.map((img, index) => (
                        <div key={index} className="break-inside-avoid overflow-hidden rounded-lg group p-1">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105 shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sfeer;

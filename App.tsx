import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, ShoppingCart } from 'lucide-react';

// --- Constants & Assets ---
const LOGO_URL = "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w";
const VIDEO_URL = "https://video.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/54935eb5-6cf5-4f21-a23e-b114b07166c6/1080p.mp4";

// Image Assets (extracted from source)
const IMAGES = {
  shelf: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/7700a28c-f6ee-4176-ba5c-88ac6b96f2db/DSC_7391+groot.jpeg?format=750w",
  meatballs: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/ac9499e5-e988-4a94-aef8-79d2ea6335a5/359518158_833695645136305_4393960425781936335_n.jpg?format=1000w",
  chefs: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c0bd450e-dabd-4b98-b029-b581fcad07a7/352317600_720787993134371_1783029003667485126_n.jpg?format=1000w",
  sandwich: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/639d04c2-14c0-4ec9-98cd-52ebf17614a0/381364469_897651865024507_125673568422183898_n.jpg?format=1000w",
  pasta: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg?format=1000w",
  bag: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/6b767d92-e490-442d-8fe3-3ca37f04013c/358012777_1238833280149926_2059834293244295995_n.jpg?format=1000w",
  serviceMaaltijden: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-4173-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg?format=1000w",
  serviceBroodjes: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg?format=1000w",
  serviceCatering: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b493b45d-de27-424d-847d-aad25edc4462/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam33.jpeg?format=1000w",
  footerLogo: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=500w"
};

// --- Components ---

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-white text-black text-xs md:text-sm py-2 px-4 text-center font-sans tracking-wide relative z-50">
      <p>nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</p>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        aria-label="Sluiten"
      >
        <X size={16} />
      </button>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-gradient-header text-white'} ${mobileMenuOpen ? 'bg-transparent' : ''}`}>
      {!mobileMenuOpen && <AnnouncementBar />}
      <div className={`px-4 md:px-8 py-4 md:py-6 flex justify-between items-center transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        
        {/* Logo */}
        <div className="w-32 md:w-48 relative z-50">
          <a href="/">
            <img 
              src={isScrolled ? IMAGES.footerLogo : LOGO_URL} 
              alt="Feduzzi" 
              className={`w-full object-contain transition-all duration-300 ${isScrolled ? 'invert-0' : 'brightness-0 invert'}`}
              style={isScrolled ? { filter: 'none' } : {}}
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans uppercase tracking-widest text-xs font-semibold">
          {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:opacity-70 transition-opacity">
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-70"><Facebook size={20} /></a>
            <a href="#" className="hover:opacity-70"><Instagram size={20} /></a>
          </div>
          <a href="#" className={`border px-6 py-3 uppercase text-xs font-bold tracking-widest transition-colors ${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}>
            Bestel broodjes
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} color={isScrolled ? "black" : "white"} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col pt-32 px-8">
          <nav className="flex flex-col space-y-6 text-xl font-serif">
            {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
              <a key={item} href="#" className="hover:text-feduzzi-red transition-colors">{item}</a>
            ))}
          </nav>
          <div className="mt-12 flex space-x-6">
            <Facebook size={24} />
            <Instagram size={24} />
          </div>
          <a href="#" className="mt-8 bg-feduzzi-red text-white text-center py-4 uppercase tracking-widest text-sm font-bold">
            Bestel broodjes
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        poster={IMAGES.meatballs} // Fallback
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 font-light tracking-wide">
          Fresh Italian Take-Away & Catering
        </h1>
        <p className="font-sans text-base md:text-xl font-light tracking-wide mb-10 opacity-90">
          Traiteur - Lunch - Italiaanse Delicatessen
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-8 py-3 uppercase text-xs font-bold tracking-widest transition-colors">
            Bestel catering
          </a>
          <a href="#" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-8 py-3 uppercase text-xs font-bold tracking-widest transition-colors">
            Bestel broodjes
          </a>
        </div>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-feduzzi-red font-serif text-3xl md:text-4xl mb-4">
            Feduzzi Mercato Italiano
          </h2>
          <div className="h-10 w-px bg-black mx-auto mb-6"></div>
          <div className="font-sans text-gray-700 leading-relaxed text-lg space-y-6">
            <p>
              Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één. Feduzzi heeft zich in 1981 gevestigd in Amsterdam en is sinds 2022 overgenomen door Nick en Nees.
            </p>
            <p>
              Feduzzi staat voor kwaliteit en gastvrijheid. Ons doel is dan ook om u thuis te laten voelen in onze winkel, zodat u niet alleen een boodschap komt halen, maar ook een ervaring rijker bent. Denk aan Italiaanse vlees-, vis- en vegagerechten, maar ook aan een rijk assortiment Italiaanse delicatessen die u niet snel ergens anders tegenkomt.
            </p>
            <p>
              Vriendelijk personeel, Italiaanse muziek en een prachtige winkels in <a href="#" className="underline hover:text-feduzzi-red">Amsterdam</a> en <a href="#" className="underline hover:text-feduzzi-red">Laren</a> waar het lijkt alsof u echt in Italië bent. Wij staan voor u klaar. Wanneer zien wij u bij ons in de winkel?
            </p>
          </div>
        </div>

        {/* Photo Grid - Custom Masonry Layout Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] mb-16">
          
          {/* Row 1 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
            <img src={IMAGES.shelf} alt="Shelves" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="col-span-2 md:col-span-4 lg:col-span-5 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
            <img src={IMAGES.meatballs} alt="Meatballs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-4 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
            <img src={IMAGES.chefs} alt="Chefs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Row 2 (offset layout) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 row-span-1 md:row-span-2 overflow-hidden rounded-lg lg:-mt-12">
            <img src={IMAGES.sandwich} alt="Sandwich" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-5 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
            <img src={IMAGES.pasta} alt="Pasta" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-3 row-span-1 md:row-span-2 overflow-hidden rounded-lg lg:-mt-24">
            <img src={IMAGES.bag} alt="Bag" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

        </div>

        <div className="text-center">
          <a href="#" className="bg-feduzzi-red hover:bg-feduzzi-red-hover text-white px-10 py-4 uppercase text-xs font-bold tracking-widest transition-colors rounded-sm inline-block">
            Meer over ons
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ image, title, description, buttonText }: { image: string, title: string, description: string, buttonText: string }) => (
  <div className="flex flex-col">
    <div className="w-full aspect-square overflow-hidden rounded-lg mb-6">
      <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <h3 className="font-serif text-3xl text-feduzzi-green mb-4 font-light">{title}</h3>
    <p className="font-sans text-gray-700 mb-8 leading-relaxed text-sm md:text-base min-h-[80px]">
      {description}
    </p>
    <div>
      <a href="#" className="border border-gray-400 hover:border-black text-gray-600 hover:text-black px-8 py-3 uppercase text-xs font-bold tracking-widest transition-all rounded-sm inline-block">
        {buttonText}
      </a>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-feduzzi-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-5xl text-gray-400 font-light mb-16">
          Italiaanse Delicatessen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard 
            image={IMAGES.serviceMaaltijden}
            title="Maaltijden"
            description="Heerlijke maaltijden van (vega)lasagne's tot authentieke pasta's en verfijnde desserts. Bekijk ons uitgebreide menu via de button hieronder"
            buttonText="Bekijk het maaltijden menu"
          />
          <ServiceCard 
            image={IMAGES.serviceBroodjes}
            title="Broodjes"
            description="Royaal belegde Italiaanse broodjes om van te genieten tijdens de lunchpauze. Bestel jouw favoriet via de knop hieronder"
            buttonText="Bekijk broodjes"
          />
          <ServiceCard 
            image={IMAGES.serviceCatering}
            title="Traiteur"
            description="Verse bereide maaltijden voor bijzondere (zakelijke) gelegenheden die we aan de deur komen brengen of die je gemakkelijk ophaalt bij ons. Bekijk ons uitgebreide overzicht"
            buttonText="Bekijk het catering menu"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Footer Logo */}
        <div className="w-48 mb-16">
          <img src={IMAGES.footerLogo} alt="Feduzzi Footer Logo" className="w-full object-contain" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-5xl text-center font-sans">
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-2xl mb-2">Vestigingen</h4>
            <a href="#" className="underline hover:opacity-80">Amsterdam</a>
            <a href="#" className="underline hover:opacity-80">Laren</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-2xl mb-2">Menu</h4>
            <a href="#" className="underline hover:opacity-80">Maaltijden</a>
            <a href="#" className="underline hover:opacity-80">Broodjes</a>
            <a href="#" className="underline hover:opacity-80">Traiteur</a>
            <a href="#" className="underline hover:opacity-80">Catering</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-2xl mb-2">Bestellen</h4>
            <a href="#" className="underline hover:opacity-80">Online broodjes</a>
            <a href="#" className="underline hover:opacity-80">Catering Amsterdam</a>
            <a href="#" className="underline hover:opacity-80">Catering Laren</a>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h4 className="font-serif text-2xl mb-2">Volg ons</h4>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="hover:opacity-80"><Facebook size={20} /></a>
              <a href="#" className="hover:opacity-80"><Instagram size={20} /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 text-[10px] md:text-xs text-center opacity-80 font-sans tracking-wide">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;
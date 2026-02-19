import { IMAGES } from '../constants/images';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'maaltijden' | 'broodjes' | 'traiteur';
    image: string;
}

export const PRODUCTS: Product[] = [
    // Maaltijden
    { id: 'm1', name: "Lasagne Bolognese", description: "Met rundergehakt, bechamelsaus en parmezaanse kaas", price: 14.50, category: 'maaltijden', image: IMAGES.serviceMaaltijden },
    { id: 'm2', name: "Melanzane alla Parmigiana", description: "Ovenschotel van aubergine, tomatensaus, mozzarella en parmezaan", price: 13.50, category: 'maaltijden', image: IMAGES.serviceMaaltijden },
    { id: 'm3', name: "Spaghetti Carbonara", description: "Met guanciale, pecorino, ei en zwarte peper", price: 15.00, category: 'maaltijden', image: IMAGES.pasta },
    { id: 'm4', name: "Tiramisu", description: "Huisgemaakt met lange vingers, mascarpone, espresso en cacao", price: 6.50, category: 'maaltijden', image: IMAGES.serviceMaaltijden },

    // Broodjes
    { id: 'b1', name: "Panino Caprese", description: "Buffelmozzarella, tomaat, basilicum en pesto", price: 8.50, category: 'broodjes', image: IMAGES.serviceBroodjes },
    { id: 'b2', name: "Panino Prosciutto", description: "Parmaham, mozzarella, rucola en tomaat", price: 9.50, category: 'broodjes', image: IMAGES.sandwich },
    { id: 'b3', name: "Panino Salame", description: "Italiaanse salami, provolone en gegrilde groenten", price: 9.00, category: 'broodjes', image: IMAGES.serviceBroodjes },
    { id: 'b4', name: "Panino Tonno", description: "Tonijnsalade, kappertjes, rode ui en rucola", price: 9.00, category: 'broodjes', image: IMAGES.serviceBroodjes },

    // Traiteur
    { id: 't1', name: "Antipasti Misto", description: "Selectie van Italiaanse vleeswaren, kazen en olijven", price: 22.50, category: 'traiteur', image: IMAGES.serviceCatering },
    { id: 't2', name: "Olijven", description: "Gemarineerde groene en zwarte olijven", price: 4.50, category: 'traiteur', image: IMAGES.serviceCatering },
    { id: 't3', name: "Tapenade", description: "Huisgemaakte tapenade van zongedroogde tomaten", price: 5.00, category: 'traiteur', image: IMAGES.serviceCatering },
];

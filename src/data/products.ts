export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    weight?: string;
    serves?: number;
}

export const PRODUCTS: Product[] = [
    // Broodjes
    {
        id: 'caprese',
        name: 'Broodje CAPRESE',
        description: 'Mozzarella met Tomaat en Basilicum',
        price: 6.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1592415499556-74fc0d0817a5?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'tonino',
        name: 'Broodje TONINO',
        description: "Feduzzi's Tonijnsalade met Basilicum",
        price: 7.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'pesto',
        name: 'Broodje PESTO',
        description: 'Mozzarella met Tomaat en Basilicumpesto',
        price: 7.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'cortina',
        name: 'Broodje CORTINA',
        description: 'Mozzarella en Salami (dolce, piccante of finocchino)',
        price: 7.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'donato',
        name: 'Broodje DONATO',
        description: 'Mozzarella en Parmaham',
        price: 7.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'peperoni',
        name: 'Broodje PEPERONI',
        description: 'Beenham met Zoet Gegilde Paprika en Basilicum',
        price: 7.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'robino',
        name: 'Broodje ROBINO',
        description: 'Coppa di Parma met Rucola, Parmezaanse Kaas en Citroen',
        price: 8.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'siena',
        name: 'Broodje SIENA',
        description: 'Beenham met Gegilde Courgette en Pesto Rosso',
        price: 8.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1592415499556-74fc0d0817a5?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'pecorino',
        name: 'Broodje PECORINO',
        description: 'Pecorino Kaas met Gegilde Courgette en Basilicum',
        price: 8.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1544062335-e1173d183f3f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'feduzzi',
        name: 'Broodje FEDUZZI',
        description: 'Mozzarella met Gegilde Aubergine en Basilicumpesto',
        price: 8.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1533089862017-bec5f7048f02?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'speciale',
        name: 'Broodje SPECIALE',
        description: 'Mozzarella met Parmaham, Tomaat en Basilicum Pesto',
        price: 9.00,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1621422792688-66236b328a8d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'salmone',
        name: 'Broodje SALMONE',
        description: 'Gerookte Zalm, Kruiden-room Kaas en Rucola',
        price: 9.00,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1553909489-cd47e3b20864?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'vitello',
        name: 'Broodje VITELLO',
        description: 'Kalfsvlees met Tonijnmayonaise, Rucola en Kappertjes',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1549442037-ccf3c88081a2?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'bresaola',
        name: 'Broodje BRESAOLA',
        description: 'Gedroogde Ossenhaas met Rucola, Parmezaanse Kaas, citroen en balsamico',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1563567607310-9bd176887532?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'mortadella',
        name: 'Broodje MORTADELLA',
        description: 'Stratciatella, artisjok en rucola',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'gorgonzola',
        name: 'Broodje GORGONZOLA',
        description: 'Blauwschimmel Kaas met Spinazie en Knoflook-champignons',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'elba',
        name: 'Broodje ELBA',
        description: 'Mozzarella, Rucola, Gegilde Aubergine, Gegilde Courgette',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1623851508216-24e03b0c169a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'elba-vegan',
        name: 'Broodje ELBA VEGAN',
        description: 'Artisjok en Zongedroogde Tomaat',
        price: 9.50,
        category: 'Broodjes',
        image: 'https://images.unsplash.com/photo-1587352347967-ee05a5a14d5e?auto=format&fit=crop&q=80&w=800'
    },

    // Panini Caldi (Warm)
    {
        id: 'pollo',
        name: 'Panini Caldi POLLO',
        description: 'Kippendijen met pesto rosso, salie, witte wijn, rucola en Parmezaanse kaas',
        price: 10.00,
        category: 'Panini Caldi',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'polpette',
        name: 'Panini Caldi POLPETTE',
        description: 'Gehaktballen met tomatensaus, rucola en Parmezaanse kaas',
        price: 10.00,
        category: 'Panini Caldi',
        image: 'https://images.unsplash.com/photo-1634676527555-5c916f1943c2?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'porchetta',
        name: 'Panini Caldi PORCHETTA',
        description: 'Speenvarken, rucola en Parmezaanse kaas',
        price: 10.00,
        category: 'Panini Caldi',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
    },

    // Maaltijden
    {
        id: 'lasagne',
        name: 'Lasagne Bolognese',
        description: 'Klassieke lasagne met rundergehakt, bechamelsaus en Parmezaanse kaas. (Klaar om op te warmen)',
        price: 14.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1574868235805-c8124f76783c?auto=format&fit=crop&q=80&w=800',
        weight: '450g',
        serves: 1
    },
    {
        id: 'melanzane',
        name: 'Melanzane alla Parmigiana',
        description: 'Vegetarische ovenschotel met aubergine, tomaat, mozzarella en basilicum.',
        price: 13.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1598379374495-a22830f3a61f?auto=format&fit=crop&q=80&w=800',
        weight: '400g',
        serves: 1
    },
    {
        id: 'carbonara',
        name: 'Spaghetti Carbonara',
        description: 'Authentieke spaghetti met guanciale, pecorino eieren en zwarte peper.',
        price: 12.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800',
        weight: '400g',
        serves: 1
    },
    {
        id: 'cannelloni',
        name: 'Cannelloni Ricotta e Spinaci',
        description: 'Gevulde pastarollen met ricotta en spinazie in een zachte tomatensaus.',
        price: 13.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1608219992524-aa2c604b3905?auto=format&fit=crop&q=80&w=800',
        weight: '400g',
        serves: 1
    },
    {
        id: 'tiramisu',
        name: 'Tiramisu Classico',
        description: 'Huisgemaakte tiramisu volgens traditioneel recept.',
        price: 6.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
        weight: '150g',
        serves: 1
    },
    {
        id: 'pannacotta',
        name: 'Panna Cotta met Rood Fruit',
        description: 'Zijdezachte roompudding met een coulis van rood fruit.',
        price: 6.50,
        category: 'Maaltijden',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a029177b?auto=format&fit=crop&q=80&w=800',
        weight: '150g',
        serves: 1
    },

    // Traiteur
    {
        id: 'antipasti',
        name: 'Antipasti Misto',
        description: 'Luxe schaal met diverse Italiaanse vleeswaren, kazen, olijven en gegrilde groenten. (Prijs per persoon)',
        price: 18.50,
        category: 'Traiteur',
        image: 'https://images.unsplash.com/photo-1541095441899-5dcd3bef00a9?auto=format&fit=crop&q=80&w=800',
        weight: '250g',
        serves: 1
    },
    {
        id: 'vitello-schaal',
        name: 'Vitello Tonnato Schaal',
        description: 'Grote schaal met fijngesneden kalfsfricandeau en tonijnmayonaise (voor 4-6 personen).',
        price: 45.00,
        category: 'Traiteur',
        image: 'https://images.unsplash.com/photo-1549442037-ccf3c88081a2?auto=format&fit=crop&q=80&w=800',
        weight: '1000g',
        serves: 5
    },
    {
        id: 'carpaccio',
        name: 'Carpaccio Schaal',
        description: 'Schaal met ossenhaas carpaccio, pijnboompitten, parmezaan en truffelmayo (voor 4-6 personen).',
        price: 45.00,
        category: 'Traiteur',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
        weight: '800g',
        serves: 5
    },
    {
        id: 'kaasplank',
        name: 'Kaasplankje Deluxe',
        description: 'Selectie van 5 bijzondere Italiaanse kazen met vijgenbrood en stroop.',
        price: 22.50,
        category: 'Traiteur',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=800',
        weight: '400g',
        serves: 2
    },
    {
        id: 'olijven',
        name: 'Olijven & Tapenade Mix',
        description: 'Bakje met gemarineerde olijven en verse tapenades.',
        price: 6.50,
        category: 'Traiteur',
        image: 'https://images.unsplash.com/photo-1596765103603-c91834925565?auto=format&fit=crop&q=80&w=800',
        weight: '200g',
        serves: 2
    }
];

export const CATEGORIES = ['Broodjes', 'Panini Caldi', 'Maaltijden', 'Traiteur'];

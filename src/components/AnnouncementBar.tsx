import { useState } from 'react';
import { X } from 'lucide-react';

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

export default AnnouncementBar;

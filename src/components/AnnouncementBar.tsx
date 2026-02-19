import { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-feduzzi-olive text-white text-xs md:text-sm py-2 px-4 text-center font-sans tracking-wide relative z-50 shadow-md">
            <p>nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</p>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                aria-label="Sluiten"
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default AnnouncementBar;

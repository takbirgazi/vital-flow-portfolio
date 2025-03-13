'use client';
import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        const handleWheel = (event) => {
            if (event.ctrlKey) {
                return;
            }

            event.preventDefault();
            const delta = event.deltaY || event.detail || event.wheelDelta;
            window.scrollBy({
                top: delta * 4,
                behavior: 'smooth',
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);
};

export default useSmoothScroll;
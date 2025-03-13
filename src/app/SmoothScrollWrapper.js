'use client';
import useSmoothScroll from './useSmoothScroll';

const SmoothScrollWrapper = ({ children }) => {
    useSmoothScroll();
    return <>{children}</>;
};

export default SmoothScrollWrapper;
import { useState, useEffect } from 'react';
import { throttle } from './utils';

export const useWindowScrollPosition = ({ throttleMs = 100 } = {}) => {
    const [scroll, setScroll] = useState({
        x: window.pageXOffset,
        y: window.pageYOffset
    });

    const handle = throttle(() => {
        setScroll({
            x: window.pageXOffset,
            y: window.pageYOffset
        });
    }, throttleMs);

    useEffect(() => {
        window.addEventListener('scroll', handle);

        return () => {
            window.removeEventListener('scroll', handle);
        };
    }, []);

    return scroll;
};

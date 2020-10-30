import { useEffect, useRef } from 'react';

export function useTimeout(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}

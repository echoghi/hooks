import { useState, useEffect } from 'react';

export const useNetworkStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);
    const [offlineAt, setOfflineAt] = useState(undefined);

    useEffect(() => {
        const handleOnline = () => {
            setStatus(true);
            setOfflineAt(undefined);
        };

        const handleOffline = () => {
            setStatus(false);
            setOfflineAt(new Date());
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return {
        isOnline: status,
        offlineAt
    };
};

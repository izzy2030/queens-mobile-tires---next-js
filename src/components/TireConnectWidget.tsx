'use client';

import { useEffect } from 'react';

export default function TireConnectWidget() {
    useEffect(() => {
        // Check if script is already present to avoid duplicates
        if (document.querySelector('script[src="https://app.tireconnect.ca/js/widget.js"]')) {
            // If script is loaded, just init
            // @ts-ignore
            if (window.TCWidget) {
                // @ts-ignore
                window.TCWidget.init({
                    apikey: 'dc18901bfdfcb8ba529d1eeb0c15c278',
                    container: 'tireconnect'
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.src = "https://app.tireconnect.ca/js/widget.js";
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            if (window.TCWidget) {
                // @ts-ignore
                window.TCWidget.init({
                    apikey: 'dc18901bfdfcb8ba529d1eeb0c15c278',
                    container: 'tireconnect'
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            // Optional: cleanup
        };
    }, []);

    return <div id="tireconnect" className="min-h-[300px] w-full" />;
}

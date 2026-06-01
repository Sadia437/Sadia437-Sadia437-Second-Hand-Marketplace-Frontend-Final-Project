import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) setShowBanner(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site usage, and provide personalized content.
                        By continuing to use our site, you agree to our use of cookies. Learn more in our{' '}
                        <Link to="/cookie-policy" className="underline hover:text-primary transition-colors">
                            Cookie Policy
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 transition-colors rounded"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm bg-primary hover:bg-primary-dark transition-colors rounded"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

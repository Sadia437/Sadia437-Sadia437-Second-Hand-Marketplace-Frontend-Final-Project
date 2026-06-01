import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center px-5 font-inter">
            <div className="text-center max-w-lg">
                <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 font-inter">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-inter">Page Not Found</h2>
                <p className="text-lg text-text-secondary mb-8 font-inter">
                    Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link
                    to="/"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-inter font-semibold transition-colors duration-200 inline-block"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

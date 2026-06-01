import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="py-16 px-5 md:px-10 bg-secondary min-h-screen font-inter">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 font-inter">Cookie Policy</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">1. What Are Cookies</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain features to work properly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Cookies</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We use cookies for several purposes:
                        </p>
                        <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                            <li>To keep you logged in during your session</li>
                            <li>To remember your preferences and settings</li>
                            <li>To analyze site usage and improve our services</li>
                            <li>To provide personalized content and recommendations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">3. Types of Cookies We Use</h2>
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary">Essential Cookies</h3>
                                <p className="text-text-secondary">Required for basic website functionality, such as authentication and security.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary">Analytics Cookies</h3>
                                <p className="text-text-secondary">Help us understand how visitors interact with our website.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary">Functional Cookies</h3>
                                <p className="text-text-secondary">Remember your preferences and provide enhanced features.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">4. Third-Party Cookies</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We may use third-party services that set their own cookies, such as Google Analytics for website analytics and Stripe for payment processing. These services have their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">5. Managing Cookies</h2>
                        <p className="text-text-secondary leading-relaxed">
                            You can control and manage cookies through your browser settings. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">6. Cookie Consent</h2>
                        <p className="text-text-secondary leading-relaxed">
                            By using our website, you consent to the use of cookies as described in this policy. If you do not agree to the use of cookies, you should adjust your browser settings accordingly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">7. Updates to This Policy</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">8. Contact Us</h2>
                        <p className="text-text-secondary leading-relaxed">
                            If you have questions about our use of cookies, please contact us through our contact form.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;

import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="py-16 px-5 md:px-10 bg-secondary min-h-screen font-inter">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 font-inter">Privacy Policy</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We collect personal information you provide when creating an account, listing products, or making purchases. This includes name, email, phone number, and location data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Your information is used to facilitate transactions, verify users, provide customer support, and improve our services. We may also use it to send important updates about your account and transactions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We share necessary information between buyers and sellers to facilitate transactions. We do not sell your personal information to third parties. Information may be shared only as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">5. Cookies and Tracking</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We use cookies to enhance your browsing experience and analyze site usage. You can control cookie settings through your browser preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">6. User Rights</h2>
                        <p className="text-text-secondary leading-relaxed">
                            You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights or have questions about our privacy practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">7. Data Retention</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We retain your information for as long as necessary to provide our services and comply with legal obligations. Account data may be retained after account deletion for legal and regulatory purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">8. Changes to Privacy Policy</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We may update this privacy policy periodically. Users will be notified of significant changes via email or platform announcements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">9. Contact Us</h2>
                        <p className="text-text-secondary leading-relaxed">
                            If you have questions about this privacy policy or our data practices, please contact us through the contact form on our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

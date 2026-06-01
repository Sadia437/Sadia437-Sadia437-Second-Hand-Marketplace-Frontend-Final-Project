import React from 'react';
import { BASE_URL } from "../../config";

const TermsOfService = () => {
    return (
        <div className="py-16 px-5 md:px-10 bg-secondary min-h-screen font-inter">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 font-inter">Terms of Service</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
                        <p className="text-text-secondary leading-relaxed">
                            By accessing and using Second Hand Marketplace, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">2. User Accounts</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Users must provide accurate information when creating accounts. Sellers must be verified before listing products. Buyers and sellers are responsible for maintaining account security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">3. Product Listings</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Sellers must provide accurate product descriptions, prices, and condition. All listings must comply with local laws and regulations. False or misleading information may result in account suspension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">4. Transactions</h2>
                        <p className="text-text-secondary leading-relaxed">
                            All transactions occur between buyers and sellers directly. The platform facilitates communication but is not responsible for transaction outcomes. Users should meet in safe, public locations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">5. Prohibited Activities</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Users may not list illegal items, engage in fraudulent activities, harass other users, or violate intellectual property rights. Violation may result in immediate account termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">6. Payment Terms</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Payments are processed through secure third-party providers. The platform may charge service fees for certain transactions. Refunds are handled between buyers and sellers directly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">7. Limitation of Liability</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Second Hand Marketplace is not liable for disputes between users, product quality issues, or any indirect damages arising from platform use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-primary mb-4">8. Changes to Terms</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform announcements.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

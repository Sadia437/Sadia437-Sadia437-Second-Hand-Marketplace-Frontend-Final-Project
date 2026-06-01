import React from 'react';

const HelpCenter = () => {
    const helpTopics = [
        {
            id: 1,
            question: "How do I create an account?",
            answer: "Click on 'Sign Up' in the top navigation. Fill in your details including name, email, and role (buyer or seller). Verify your email to complete registration."
        },
        {
            id: 2,
            question: "How do I add a product for sale?",
            answer: "Log in as a seller, go to your dashboard, click 'Add Product'. Fill in all required fields including product details, price, category, and upload a photo."
        },
        {
            id: 3,
            question: "How do I purchase a product?",
            answer: "Browse categories or search for products. Click 'Book Now' on any product, fill in your contact details and meeting location, then place the order."
        },
        {
            id: 4,
            question: "How do I view my orders?",
            answer: "Go to your dashboard and click 'My Orders'. Here you can see all your purchased items and their status."
        },
        {
            id: 5,
            question: "How does payment work?",
            answer: "After placing an order, you can pay using the 'Pay Now' button in your orders. We use secure Stripe payment processing."
        },
        {
            id: 6,
            question: "What if I have an issue with a purchase?",
            answer: "Contact the seller directly using the phone number provided in your order details. For platform issues, use the contact form."
        }
    ];

    return (
        <div className="py-16 px-5 md:px-10 bg-secondary min-h-screen font-inter">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 font-inter">Help Center</h1>
                <div className="space-y-6">
                    {helpTopics.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 font-inter">{item.question}</h2>
                            <p className="text-text-secondary font-inter leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;

import React from 'react';


const Blog = () => {
    const questions = [
        {
            id: 1,
            question: "What are the benefits of buying second-hand products?",
            answer: "Buying second-hand products is environmentally friendly, cost-effective, and helps reduce waste. It promotes sustainability by extending the life cycle of goods and makes unique, vintage items accessible."
        },
        {
            id: 2,
            question: "How can I ensure the quality of second-hand items?",
            answer: "Check product descriptions, ask for detailed photos, verify seller ratings, and consider meeting in person for inspection. Our platform verifies sellers to ensure trust."
        },
        {
            id: 3,
            question: "What payment methods are accepted?",
            answer: "We accept various payment methods including credit cards, debit cards, and digital wallets. For security, we recommend using our integrated Stripe payment system."
        },
        {
            id: 4,
            question: "How does seller verification work?",
            answer: "Sellers can apply for verification by providing necessary documents. Once verified, they get a blue tick next to their name, indicating trustworthiness to buyers."
        }
    ];

    return (
        <div className="py-16 px-5 md:px-10 bg-secondary min-h-screen font-inter">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 font-inter">Frequently Asked Questions</h1>
                <div className="space-y-6">
                    {questions.map((item) => (
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

export default Blog;

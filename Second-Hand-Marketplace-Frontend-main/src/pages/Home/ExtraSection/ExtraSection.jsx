import React from "react";

const ExtraSection = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Verified Sellers",
      description: "All sellers are verified for your safety and trust."
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Safe and secure payment processing with Stripe."
    },
    {
      icon: "⭐",
      title: "Quality Assurance",
      description: "We ensure all products meet our quality standards."
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep."
    }
  ];

  return (
    <div className="py-16 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary font-inter mb-4">
            Why Choose <span className="text-primary">Us?</span>
          </h1>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Discover why thousands of customers trust our platform for their second-hand shopping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-secondary rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary font-inter mb-2">{feature.title}</h3>
              <p className="text-text-secondary font-inter">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;

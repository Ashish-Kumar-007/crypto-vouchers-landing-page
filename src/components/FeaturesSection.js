import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "icon-name", // Replace with actual icon class
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "icon-name", // Replace with actual icon class
      title: "Feature 2",
      description:
        "Pellentesque nec justo mattis, rhoncus nunc sed, scelerisque tortor.",
    },
    {
      icon: "icon-name", // Replace with actual icon class
      title: "Feature 3",
      description:
        "Pellentesque nec justo mattis, rhoncus nunc sed, scelerisque tortor.",
    },
    {
      icon: "icon-name", // Replace with actual icon class
      title: "Feature 4",
      description:
        "Pellentesque nec justo mattis, rhoncus nunc sed, scelerisque tortor.",
    },
    // Add more features
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-indigo-600 to-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                {/* Replace with actual icon */}
                <i className={`icon-font ${feature.icon} text-xl`} />
              </div>
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
              <a
                href="#"
                className="mt-4 text-blue-300 hover:underline inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import Image from "next/image";
import React from "react";

const TeamMember = ({ name, role, photo, bio }) => (
  <div className="flex flex-col justify-center items-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
    <Image
      src={photo}
      alt={name}
      width={112}
      height={112}
      className="rounded-full mb-4 border-4 border-blue-500 hover:border-blue-600 transition duration-300"
    />
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
    <p className="text-gray-500">{role}</p>
    <p className="text-gray-700 mt-4">{bio}</p>
  </div>
);

const AboutUsPage = () => {
  const teamMembers = [
    // Define your team members here
    {
      name: "Ashish Kumar Sahoo",
      role: "CEO",
      photo: "/Images/ashish.png",
      bio: "...",
    },
    { name: "Abhishek Yadav", role: "CTO", photo: "/Images/abhishek.jpg", bio: "..." },
    { name: "Rajendra Bisoi", role: "COO", photo: "/Images/rajendra.jpg", bio: "..." },
  ];

  return (
    <div className="container py-12 bg-gradient-to-r from-indigo-600 to-gray-900 text-white">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold  mb-4">
          Mission & Vision
        </h2>
        <p className="text-gray-400">
          Our mission is to provide a seamless and secure platform for
          generating and redeeming crypto vouchers, empowering individuals to
          participate in the digital economy with confidence.
        </p>
        <p className="text-gray-400 mt-4">
          Our vision is to become the leading crypto voucher platform,
          revolutionizing the way people transact and engage with
          cryptocurrencies.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold  mb-4">
          Achievements
        </h2>
        <p className="text-gray-400">
          We are proud to have partnered with industry leaders such as XYZ
          Company and received the Blockchain Innovation Award in 2022 for our
          contribution to the crypto community.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;

import Image from "next/image";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMember = ({ name, role, photo, bio, twitter, linkedin, github }) => (
  <div className="flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
    <Image
      src={photo}
      alt={name}
      width={120}
      height={120}
      className="rounded-full mb-4 border-4 border-white hover:border-blue-300 transition duration-300"
    />
    <h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-blue-200 text-sm">{role}</p>
    <p className="text-gray-300 mt-4 text-center">{bio}</p>
    <div className="flex space-x-4 mt-6">
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out" />
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-gray-300 hover:text-gray-800 transition duration-300 ease-in-out" />
      </a>
    </div>
  </div>
);


const AboutUsPage = () => {
  const teamMembers = [
    // Define your team members here
    {
      name: "Ashish Kumar Sahoo",
      role: "Full Stack Blockchain Developer",
      photo: "/Images/ashish.png",
      bio: "...",
      twitter: "https://twitter.com/web3_eth_ashish",
      linkedin: "http://www.linkedin.com/in/ashish-kumar-sahoo-007",
      github: "https://github.com/Ashish-Kumar-007",

    },
    {
      name: "Abhishek Yadav",
      role: "CTO",
      photo: "/Images/abhishek.jpg",
      bio: "...",
      twitter: "https://twitter.com/0xAbhi_eth",
      linkedin: "https://www.linkedin.com/in/a-bhishekyadav",
      github: "https://github.com/decentralized-86",
    },
    {
      name: "Rajendra Bisoi",
      role: "COO",
      photo: "/Images/rajendra.jpg",
      bio: "...",
      twitter: "https://twitter.com/RajendraBisoi13",
      linkedin: "https://www.linkedin.com/in/rajendra-bisoi",
      github: "https://github.com/coderRaj07",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-r from-blue-600 to-purple-900 text-white w-full">
      <section className="mb-12">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      <section className="mb-12 text-left">
        <h2 className="text-3xl font-semibold mb-4">Mission & Vision</h2>
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
        <h2 className="text-3xl font-semibold mb-4">Achievements</h2>
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

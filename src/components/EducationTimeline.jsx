// src/components/EducationTimeline.js
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationTimeline = () => {
  const educationData = [
    {
      institution: "University Name",
      degree: "Bachelor's Degree in Computer Science",
      year: "2020 - 2024",
      description: "Studied various computer science subjects including programming, algorithms, and data structures.",
    },
    {
      institution: "Some College",
      degree: "High School Diploma",
      year: "2016 - 2020",
      description: "Completed high school education with a focus on science and technology.",
    },
    // Add more education items as needed
  ];

  return (
    <div className="relative">
      <ul className="relative border-l-2 border-gray-300">
        {educationData.map((item, index) => (
          <li key={index} className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-2xl font-semibold text-gray-800">{item.degree}</h3>
            <p className="text-lg text-gray-600">{item.institution}</p>
            <p className="text-sm text-gray-500">{item.year}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationTimeline;

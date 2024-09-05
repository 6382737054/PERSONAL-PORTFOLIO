// src/components/ProjectCard.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';

const technologyIcons = {
  html: <FaHtml5 size={24} className="text-red-600" />,
  css: <FaCss3Alt size={24} className="text-blue-600" />,
  js: <FaJs size={24} className="text-yellow-500" />,
  react: <FaReact size={24} className="text-blue-500" />,
  python: <FaPython size={24} className="text-yellow-600" />,
};

const ProjectCard = ({ title, description, image, link, technologies }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-2 mb-4">
        {technologies.map((tech) => (
          <div key={tech} className="text-gray-600">
            {technologyIcons[tech]}
          </div>
        ))}
      </div>
      <a href={link} className="text-blue-600 hover:underline">View Project</a>
    </div>
  </div>
);

export default ProjectCard;

// src/components/EducationCard.js
import React from 'react';

const EducationCard = ({ icon, title, institution, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{institution}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default EducationCard;

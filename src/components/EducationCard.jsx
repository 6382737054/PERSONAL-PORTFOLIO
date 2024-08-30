import React from 'react';

function EducationCard({ title, institution, description }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-full">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-medium">{institution}</h4>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default EducationCard;

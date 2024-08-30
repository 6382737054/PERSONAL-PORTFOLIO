// src/components/SkillCard.js
import React from 'react';

const SkillCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-lg ${bgColor} text-white`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default SkillCard;
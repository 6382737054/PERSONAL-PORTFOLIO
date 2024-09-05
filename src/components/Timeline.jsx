// src/components/Timeline.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Single timeline item
const TimelineItem = ({ title, company, date, description }) => {
  // Using Intersection Observer to trigger animations
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative mb-8 transition-transform duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <div className="flex items-center">
        <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" />
        <div className="w-full ml-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <h4 className="text-lg text-gray-700">{company}</h4>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Main timeline component with scroll animations
const Timeline = () => (
  <div className="relative border-l-2 border-gray-300 pl-4">
    <TimelineItem
      title="Research Associate"
      company="Hue Learn"
      date="Jul 2022 - Nov 2023"
      description="Developed Game environments with the help of Blender and Unreal Engine which mainly includes immersive landscapes. Collaborated with educational experts to design course content and structure for maximum impact."
    />
    <TimelineItem
      title="Software Engineer Associate"
      company="Wise Work"
      date="Nov 2023 - May 2024"
      description="Assisted in the development of web applications for the Hue Play platform. Integrated data from MongoDB to Unreal Engine for dynamic content."
    />
    {/* Add more TimelineItem components as needed */}
  </div>
);

export default Timeline;

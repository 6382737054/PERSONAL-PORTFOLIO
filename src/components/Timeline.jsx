// src/components/Timeline.js
import React from 'react';

const TimelineItem = ({ title, company, date, description }) => (
  <div className="relative mb-8">
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

const Timeline = () => (
  <div className="relative border-l-2 border-gray-300 pl-4">
    <TimelineItem
      title="Research associate"
      company="Hue Learn"
      date="Jul 2022 - Nov 2023"
      description=" Developed Game environments with the help of Blender and Unreal Engine which mainly includes immersive landscapes. Collaborated with educational experts to design course content and structure for maximum impact. Focused on creating interactive and visually appealing educational content for better user experience. Assisted in research and development of innovative learning tools and techniques. Developed user courses on topics such as blockchain, IoT, and AI for educational platforms"
    />
    <TimelineItem
      title="Software engineer Associate"
      company="Wise work"
      date="Nov 2023 - May 2024"
      description="Assisted in the development of web applications for the Hue Play platform.  Integrated data from MongoDB to Unreal Engine for dynamic content. Developed 3D Metaverse classes and VR applications. Developed dynamic courses on various topics in Unreal Engine, retrieving content from MongoDB. Built an Android application for virtual reality headsets using Unreal Engine and Android Studio. Implemented Azure Git for project backups and version control.

"
    />
    {/* Add more TimelineItem components as needed */}
  </div>
);

export default Timeline;

// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import EducationTimeline from './components/EducationTimeline'; // If you have this component
import SkillCard from './components/SkillCard'; // Import SkillCard
import EducationCard from './components/EducationCard'; // Import EducationCard
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiBlender, SiUnrealengine } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <main>
   {/* Home Section */}
<section
  id="home"
  className="flex items-center justify-center py-32 bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-center"
>
  <div className="max-w-4xl mx-auto px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
      Hello, I'm <span className="text-yellow-300">Prasannaa</span>
    </h1>
    <p className="text-xl md:text-2xl text-white mb-8">
      Frontend Developer | React Enthusiast | Creative Coder
    </p>
    <div className="flex justify-center">
      <a
        href="#projects"
        className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        View My Work
      </a>
      <a
  href={`${process.env.PUBLIC_URL}/Prasannaa.pdf`}
  download
  className="ml-4 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
>
  Download Resume
</a>

    </div>
  </div>
</section>


        {/* About Me Section */}
        <section id="about" className="py-20 bg-gray-200 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              I’m a passionate frontend developer with a keen eye for design and a love for creating intuitive, user-friendly interfaces. With experience in HTML, CSS, JavaScript, and React, I enjoy transforming ideas into visually appealing and functional web applications. My goal is to craft unique and engaging user experiences that leave a lasting impression. Additionally, I have skills in landscape creation using Unreal Engine and Blender, along with experience in virtual reality development with Unreal Engine, which allows me to create immersive and interactive digital experiences.
            </p>
          </div>
        </section>





<section id="skills" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold mb-12">My Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Skill Card Component */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-yellow-500">
          <FaHtml5 />
        </div>
        <h3 className="text-2xl font-semibold mb-4">HTML5</h3>
        <p className="text-gray-600">Building structured and semantic web pages with modern HTML5.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-blue-500">
          <FaCss3Alt />
        </div>
        <h3 className="text-2xl font-semibold mb-4">CSS3</h3>
        <p className="text-gray-600">Styling and designing visually appealing web pages with CSS3.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-yellow-500">
          <FaJs />
        </div>
        <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
        <p className="text-gray-600">Creating interactive and dynamic web experiences with JavaScript.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-teal-500">
          <FaReact />
        </div>
        <h3 className="text-2xl font-semibold mb-4">React</h3>
        <p className="text-gray-600">Building modern, high-performance user interfaces with React.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-teal-500">
          <SiTailwindcss />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Tailwind CSS</h3>
        <p className="text-gray-600">Designing custom, responsive layouts using Tailwind CSS framework.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-green-500">
          <FaPython />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Python</h3>
        <p className="text-gray-600">Programming for data analysis, machine learning, and more.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-red-500">
          <SiBlender />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Blender</h3>
        <p className="text-gray-600">Creating detailed 3D models and animations for immersive experiences.</p>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4 text-4xl text-blue-500">
          <SiUnrealengine />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Unreal Engine</h3>
        <p className="text-gray-600">Developing interactive and immersive virtual reality experiences.</p>
      </div>
    </div>
  </div>
</section>



                {/* Projects Section */}
                <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* My Projects Title */}
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            
            {/* Project Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Pet Adoption Platform"
                image={`${process.env.PUBLIC_URL}/images/Project1.jpg`}
                link="https://6382737054.github.io/PET-ADOPTION/"
                technologies={['html', 'css', 'js', 'react']}
              />
              <ProjectCard
                title="Coconut Business Display"
                image={`${process.env.PUBLIC_URL}/images/Project2.jpg`}
                link="https://6382737054.github.io/COCONUT-WEBSITE/"
                technologies={['html', 'css', 'react', 'js']}
              />
              <ProjectCard
                title="Personal Portfolio"
                image={`${process.env.PUBLIC_URL}/images/Project3.jpg`}
                link="https://example.com/project3"
                technologies={['html', 'css', 'react', 'js']}
              />
              <ProjectCard
                title="Game Environment Design"
                image={`${process.env.PUBLIC_URL}/images/Project4.jpg`}
                link="https://example.com/project4"
                technologies={[]}
              />
              <ProjectCard
                title="Vehicle Detection in Traffic using YOLO"
                image={`${process.env.PUBLIC_URL}/images/Project5.jpg`}
                link="https://example.com/project5"
                technologies={['python']}
              />
            </div>
          </div>
        </section>



        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
            <Timeline />
          </div>
        </section>
{/* Education Section */}
<section id="education" className="py-20 bg-gray-50 text-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 bg-gray-400 h-full"></div>
      </div>
      <div className="relative space-y-8">
        <EducationCard
          title="Higher Secondary"
          institution="PKP Swamy Matric Higher Secondary School"
          description="Completed my higher secondary education in 2019 with an overall score of 73%."
          titleClassName="text-lg" // Adjusted size
          institutionClassName="text-base" // Adjusted size
        />
        <EducationCard
          title="Bachelor of Engineering in Computer Science"
          institution="Bannari Amman Institute of Technology"
          description="2023 graduate specialized in web development, 3D modeling, and developing machine learning models."
          titleClassName="text-lg" // Adjusted size
          institutionClassName="text-base" // Adjusted size
        />
      </div>
    </div>
  </div>
</section>



        {/* Contact Me Section */}
        <section id="contact" className="py-20 bg-gray-100 text-gray-900 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://linkedin.com/in/prasanna-e" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/6382737054" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://instagram.com/_prasanaa" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl" />
              </a>
            </div>
            <p className="text-lg">Email: prasanna.es11@gmail.com</p>
            <p className="text-lg">Phone: +91-6382737054</p>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-100 text-center">
        <p>&copy; 2024 Prasannaa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

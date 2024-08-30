// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import EducationTimeline from './components/EducationTimeline'; // Add your EducationTimeline component
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import the icons
import { SiTailwindcss, SiBlender, SiUnrealengine } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <main>
        <section id="home" className="flex items-center justify-center py-32 bg-gradient-to-r from-blue-500 to-teal-400 text-center">
          <div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Hello, I'm [Prasannaa]</h1>
            <p className="text-xl text-white mb-8">Frontend Developer | React Enthusiast | Creative Coder</p>
            <div>
              <a href="#projects" className="inline-block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
                View My Work
              </a>
              <a href="/resume.pdf" download className="ml-4 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-200 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              I’m a passionate frontend developer with a keen eye for design and a love for creating intuitive, user-friendly interfaces. With experience in HTML, CSS, JavaScript, and React, I enjoy transforming ideas into visually appealing and functional web applications. My goal is to craft unique and engaging user experiences that leave a lasting impression. Additionally, I have skills in landscape creation using Unreal Engine and Blender, along with experience in virtual reality development with Unreal Engine, which allows me to create immersive and interactive digital experiences.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-50 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skill Card Component */}
              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
                  <FaHtml5 />
                </div>
                <h3 className="text-2xl font-semibold mb-4">HTML & CSS</h3>
                <p className="text-gray-600">Building responsive and visually appealing websites using modern HTML5 and CSS3 techniques.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-yellow-500">
                  <FaJs />
                </div>
                <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
                <p className="text-gray-600">Creating interactive and dynamic web experiences with JavaScript, including ES6+ features.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
                  <FaReact />
                </div>
                <h3 className="text-2xl font-semibold mb-4">React</h3>
                <p className="text-gray-600">Developing modern, high-performance user interfaces with React and React Hooks.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-teal-500">
                  <SiTailwindcss />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Tailwind CSS</h3>
                <p className="text-gray-600">Designing custom and responsive layouts using the Tailwind CSS utility-first framework.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-green-500">
                  <FaPython />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Python</h3>
                <p className="text-gray-600">Developing backend applications, data analysis, and machine learning models using Python.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-green-500">
                  <SiBlender />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Blender</h3>
                <p className="text-gray-600">Creating detailed 3D models and animations for immersive experiences and visual storytelling.</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-4 text-4xl text-purple-600">
                  <SiUnrealengine />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Unreal Engine</h3>
                <p className="text-gray-600">Developing interactive and immersive virtual reality experiences with Unreal Engine.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Pet Adoption Platform"
              image="/images/project1.jpg"
              link="https://6382737054.github.io/PET-ADOPTION/"
              technologies={['html', 'css', 'js', 'react']}
            />
            <ProjectCard
              title="Coconut business display"
              image="/images/project2.jpg"
              link="https://6382737054.github.io/COCONUT-WEBSITE/"
              technologies={['html', 'css', 'react', 'js']}
            />
            <ProjectCard
              title="Personal Portfolio"
              image="/images/project3.jpg"
              link="https://example.com/project3"
              technologies={['html', 'css', 'react', 'js']}
            />
            <ProjectCard
              title="Game environment design"
              image="/images/project4.jpg"
              link="https://example.com/project4"
              technologies={[]}
            />
            <ProjectCard
              title="Vehicle detection in traffic using YOLO"
              image="/images/project5.jpg"
              link="https://example.com/project5"
              technologies={['python']}
            />
            {/* Add more ProjectCard components as needed */}
          </div>
        </section>

        <section id="experience" className="py-20 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
            <Timeline />
          </div>
        </section>

        <section id="education" className="py-20 bg-gray-50 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 bg-gradient-to-b from-blue-500 to-teal-400 h-full"></div>
              </div>
              <div className="space-y-8">
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl">
                      <FaLinkedin />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold">HSC, 2017-2019</h3>
                      <p className="text-gray-600">PKP Swamy Matriculation higher secondary school</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Completed 12th standard with 73% marks in the year 2019 in the stream of Computer Science</p>
                </div>

                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl">
                      <FaGithub />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold">Bachelors in Computer Science and engineering</h3>
                      <p className="text-gray-600">Bannari Amman Institute of technology, 2019-2023</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Specialized in software engineering with an emphasis on web technologies and agile methodologies. Worked on various research projects and real-world applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-200 text-gray-900 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg mb-4">Feel free to reach out for any inquiries.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/prasanna-e" className="text-blue-600 hover:underline" aria-label="LinkedIn" target='blank'>
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/6382737054" className="text-gray-800 hover:underline" aria-label="GitHub"target='blank'>
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/_prasanaa" className="text-pink-600 hover:underline" aria-label="Instagram"target='blank'>
                <FaInstagram className="text-3xl" />
              </a>
            </div>
            <p className="mt-6 text-lg">Email: prasanna.es11@gmail.com</p>
            <p className="text-lg">Phone: +91-6382737054</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

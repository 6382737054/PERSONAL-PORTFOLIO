// src/components/Navbar.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => (
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/_prasanaa" className="text-gray-600 hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/prasanna-e" className="text-gray-600 hover:text-blue-700">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.github.com/6382737054" className="text-gray-600 hover:text-gray-800">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;

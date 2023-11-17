"use client"
import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  onToggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ onToggleTheme }) => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/RyanVanZyl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="null"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-van-zyl-40574922b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <p>&copy; {new Date().getFullYear()} Ryan van Zyl</p>
        </div>

        <div className="flex flex-col">
          <p>Phone: +27 73 492 8441</p>
          <p>Email: ryan.vanzyl01@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const YourComponent: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    
  };

  return (
    <div className={`bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white transition-all`}>
      
      <Footer onToggleTheme={handleToggleTheme} />
    </div>
  );
};

export default YourComponent;

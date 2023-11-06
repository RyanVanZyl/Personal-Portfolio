import React from 'react';

const Expertise = () => {
  const expertiseList = [
    'HTML & CSS: Have a very good understanding on this area, and have a good amount of work exprience regarding html & css',
    'Frontend Development: Proficient in building modern, responsive web applications using Next.js.',
    'Tailwind CSS : Well Oriantated with using Tailwind CSS to streamline the styling and design of web applications.',
    'Front-End Development: Capable of working on  frontend  aspects of web development, however I am Familiar with Backend    development as well.',
    'TypeScript Integration: Experience in incorporating TypeScript to enhance code quality and type safety.',
    'Database Management: Familiar with working with databases, including MongoDB, for data storage and retrieval.',
    'Responsive Design: Experienced in designing and developing websites that adapt seamlessly to various screen sizes and devices.',
    'Collaboration and Teamwork: Effective communication and collaboration skills for working in development teams.',
    'Best Practices: Strong commitment to following best coding practices, including code reviews, testing, and version control using Git.',
    'Deployment and Hosting: Proficient in deploying web applications to Netlify.',
  ];

  return (
    <div className="shadow-md p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Expertise Includes:</h2>
      <ul className="list-disc pl-6">
        {expertiseList.map((item, index) => (
          <li key={index} className="mb-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;

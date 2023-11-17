// pages/about.js

import React from 'react';
import Container from '@/components/ui/container';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Nodejs' },
  { skill: 'React' },
  { skill: 'Redux' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Mongodb' },
  { skill: 'Prisma client' },
];
const About = () => {
  return (
    <>
      <Container>
        <div className="px-4 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0  md:flex-row md:text-left">
          <section className="py-6 md:w-1/2 ">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <h3 className="text-xl font-semibold my-2">
              Full-Stack Web Developer
            </h3>
            <p>
              I am a Well thought Full-Stack web developer student with a years of
              experience in web development. My
              expertise includes JavaScript, ReactJs, NextJs, Typescript,
              NodeJS, Express, MongoDB,Tailwind-css.
              I aim to provide high-quality services in frontend &
              backend development, Mern-stack, Nextjs Projects. React js & Next
              js applications, landing pages, Company Website. I pride myself on
              writing SEO-friendly and clean code to ensure the best user
              experience.
            </p>
            <p className="my-2">
              I believe that you should{' '}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />

            <h3 className="text-xl font-semibold my-2">Education</h3>
            <p className="my-2">
              I Matriculated from Noordgesig Secondary, South Africa in
              2019 with a Bechalors Pass.
            </p>

            <p className=' pb-6'>
              In the Year 2021 I completed a 12 month Course in Information Technology & CyberSecurity, Optaining Certifications
              in Comptia A+ and Comptia Security+, I have been following down the Technology career path ever since.
            </p>

            <p>
              I completed My Full-Stack Web Developmenet course from Velisa Africa
              - Remote Learning School from Bryanston, SA in 2023.
            </p>

            <br />
            <h3 className="text-xl font-semibold my-2">Experience</h3>
            <h4 className="font-semibold">
              Full-Stack Student @Velisa Africa
            </h4>
            <p className="my-2">
              Technologies I cover
              HTML, CSS, Javascript, React, Nodejs, Mongodb,
              MERN Stack, Nextjs, Tailwind css.
            </p>

            <h4 className="font-semibold">Mentor @ Microverse</h4>
            <p className="my-2">
              Invested 1500+ hours working on real projects with awesome coding
              Colleagus and a very well respected Lecturer. Learned fundamentals of full-stack
              development including Git, HTML/CSS, JavaScript,
              React, and Redux. Worked remotely doing solo programming 
              for 6 hours every day.
            </p>
          </section>
          <section className="md:w-1/2 ">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start my-4">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 my-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default About;

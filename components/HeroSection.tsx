import React from 'react';
import Image from 'next/image';
import Container from './ui/container';
import Expertise from './Expertise';

const HeroSection = () => {
  return (
    <section className=" py-16 px-4 md:px-16 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-4">
            <Image
              src="/ryanvanzyl.jpeg"
              alt="Hero Image"
              className="rounded-full"
              priority
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold">
              Front-End Web Developer
            </h1>
            <p className="mt-4 text-lg md:text-xl text-teal-600">
              Nextjs/React Developer
            </p>
            <div className="mt-8 space-y-4">
              <p>
                I am a passionate developer with a focus on creating
                interactive and user friendly web applications.
              </p>
            </div>
            <div>
            <Expertise />
            </div>
            <div className="mt-8  flex gap-2">
              <a
                href="https://github.com/RyanVanZyl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                View My GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-van-zyl-40574922b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                View My LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

import React from 'react'
import Container from '@/components/ui/container'
import { MailIcon, PhoneIcon } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className=" h-full bg-gradient-to-r from-teal-400 to-gray-400">
        <Container>
          <div className=' pt-10 '>
            <div className='pt-14 pb-14 pl-14 pr-14 max-w-lg bg-gray-400 text-white p-4 mx-auto shadow-2xl rounded-xl
            '>
            <h1 className='pt-2  font-extralight'>Web Developer</h1>
              <h1 className=' pt-2'>Ryan van Zyl</h1>
            <p className=' pt-2'>
            <PhoneIcon />
              +27 73 492 8441</p>
            <p className=' pt-2'>
              <MailIcon />
              ryan.vanzyl01@gmail.com</p>
        </div>
        <div className="  pl-[450px] mt-8  flex gap-2">
              <a
                href="https://github.com/RyanVanZyl"
                target="_blank"
                rel="noopener noreferrer"
                className="  bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
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
        </Container>
    </div>
  )
}

export default ContactPage
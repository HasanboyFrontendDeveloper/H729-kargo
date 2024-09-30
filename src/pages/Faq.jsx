import { Typography } from '@material-tailwind/react'
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg width="30" height="17" className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768156 27.0948 0.0768156 26.3137 0.857864L15 12.1716L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14V15H17V14H13Z" fill="black" />
    </svg>

  );
}

const Faqs = [
  {
    question: `Пример ${window.innerWidth <= 960 ? '\n' : ''} вопроса #1`,
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: `Пример ${window.innerWidth <= 960 ? '\n' : ''} вопроса #2`,
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: `Пример ${window.innerWidth <= 960 ? '\n' : ''} вопроса #3`,
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: `Пример ${window.innerWidth <= 960 ? '\n' : ''} вопроса #4`,
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
]

const Faq = () => {


  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='lg:max-w-[1278px] md:max-w-[90%] max-w-[280px] mx-auto lg:mt-[65px] mt-[40px] lg:mb-[90px] mb-[60px] '>

      <div className="flex sm:flex-row sm:justify-between items-center flex-col lg:gap-7 gap-[10px] mb-[52px] ">

        <Typography className='text-primary sm:max-w-[473px] max-w-[350px] font-bold font-raleway md:text-[51px] !leading-[42.26px] lg:!leading-[59.87px] text-[36px] ' >
          Часто задаваемые вопросы
        </Typography>

        <Typography className='text-textPrimary sm:max-w-[630px] max-w-full font-normal font-raleway !leading-[19.6px] lg:!leading-[22.4px] lg:py-[38px] text-sm sm:text-base  ' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>

      <div className=" max-w-[1276px] bg-lightBlue rounded-3xl lg:pt-[60px] lg:pb-[70px] lg:pl-[45px] lg:pr-[50px] pt-[30px] pl-[20px] pr-[25px] pb-[35px]  ">
        {Faqs.map((item, index) => (
          <Accordion Accordion className='lg:m-0 mb-[16px] ' open={open === index} icon={<Icon id={index} open={open} />}>
            <AccordionHeader className={`font-raleway font-bold !leading-[23.48px] lg:!leading-[37.57px] lg:py-[30px] pt-[16px] pb-[18px] lg:text-[32px] text-[20px] hover:text-primary text-primary border-none acardionHover whitespace-pre-line ${open === index && 'acardionBg'} `} onClick={() => handleOpen(index === open ? -1 : index)}>{item.question}</AccordionHeader>
            <AccordionBody className='pt-[60px] pb-[30px] font-raleway font-normal lg:text-[20px] text-sm !leading-[19.6px] lg:!leading-[28px] text-primary ' >
              {item.answer}
            </AccordionBody>
          </Accordion>

        ))}
      </div>

      {/* <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion> */}
    </div >
  )
}

export default Faq
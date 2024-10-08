import { Typography } from '@material-tailwind/react'
import meneger from '../assets/images/meneger.png'
import double from '../assets/images/double.png'

import React from 'react'

const Manager = () => {
  return (
    <div className='lg:max-w-[1276px] md:max-w-[90%] max-w-[280px] mx-auto py-5 flex flex-col items-center md:items-baseline '>
      <div className="flex md:flex-row flex-col-reverse gap-5 py-5">
        <div className="bg-lightBlue rounded-2xl lg:px-[72px] px-5 lg:pt-[52px] lg:pb-[70px] py-[25px] lg:max-w-[844px] max-w-[280px] ">
          <Typography className='lg:text-[51px] text-[36px] font-bold font-raleway !leading-[42.26px] lg:!leading-[59.87px] text-primary mb-[15px] ' >Ваш менеджер</Typography>
          <Typography className='font-normal font-raleway !leading-[19.6px] lg:!leading-[25.2px] lg:text-lg text-sm text-textPrimary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography> <br />
          <Typography className='font-normal font-raleway !leading-[19.6px] lg:!leading-[25.2px] lg:text-lg text-sm text-textPrimary '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
        </div>
        <div className=" rounded-2xl max-w-[412px] max-h-[497px] mx-auto ">
          <img src={meneger} alt="Header Image" className='lg:max-w-[412px] lg:w-[412px] w-[280px] ' />

        </div>
      </div>
      <div className="lg:pl-[72px] lg:max-w-full max-w-[280px] ">


        <div className="mt-5 lg:mb-[90px] mb-[30px] sm:max-w-[664px] max-w-full ">
          <Typography className='font-bold font-raleway !leading-[28.18px] lg:!leading-[46.96px] lg:text-[40px] text-2xl text-primary lg:mb-[29px] mb-[10px] ' >Пример заголовка </Typography>
          <Typography className='font-normal font-raleway lg:text-base text-sm !leading-[19.6px] lg:!leading-[22.4px] text-textPrimary '>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography> <br />
          <Typography className='font-normal font-raleway lg:text-base text-sm !leading-[19.6px] lg:!leading-[22.4px] text-textPrimary '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </Typography>
        </div>

        <div className=" lg:mb-[70px] mb-[45px] max-w-[664px] ">
          <Typography className='font-bold font-raleway !leading-[23.48px] lg:!leading-[37.57px] lg:text-[32px] text-xl lg:mb-5 mb-[10px] text-primary  ' variant='h3' >Пример заголовка </Typography>
          <Typography className='font-normal font-raleway lg:text-base text-sm !leading-[19.6px] lg:!leading-[22.4px] text-textPrimary '>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</Typography> <br />
        </div>

      </div>

      <div className="md:w-[844px] w-[280px] bg-lightBlue relative rounded-3xl lg:flex gap-[3px] lg:px-10 px-[50px] lg:py-0 pt-[80px] pb-[90px] mb-[60px] ">
        <svg className='lg:h-20 h-10 max-w-[75px] lg:translate-y-[20px] lg:mr-2 absolute lg:static left-5 top-5  ' viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.22 35.6C58.22 38.9733 57.12 41.6867 54.92 43.74C52.72 45.6467 49.9333 46.6 46.56 46.6C42.6 46.6 39.3 45.28 36.66 42.64C34.1667 40 32.92 36.1133 32.92 30.98C32.92 26.14 33.58 22.0333 34.9 18.66C36.3667 15.14 38.0533 12.2067 39.96 9.85999C42.0133 7.36666 44.0667 5.38666 46.12 3.91999C48.32 2.45332 50.2267 1.42666 51.84 0.839988L57.34 8.53999C54.1133 10.1533 51.4733 12.3533 49.42 15.14C47.5133 17.78 46.56 21.1533 46.56 25.26C47.1467 25.1133 47.9533 25.04 48.98 25.04C51.9133 25.04 54.1867 26.0667 55.8 28.12C57.4133 30.1733 58.22 32.6667 58.22 35.6ZM26.1 35.6C26.1 38.9733 25 41.6867 22.8 43.74C20.6 45.6467 17.8133 46.6 14.44 46.6C10.48 46.6 7.18 45.28 4.54 42.64C2.04667 40 0.800001 36.1133 0.800001 30.98C0.800001 26.14 1.46 22.0333 2.78 18.66C4.24667 15.14 5.93333 12.2067 7.84 9.85999C9.89333 7.36666 11.9467 5.38666 14 3.91999C16.2 2.45332 18.1067 1.42666 19.72 0.839988L25.22 8.53999C21.9933 10.1533 19.3533 12.3533 17.3 15.14C15.3933 17.78 14.44 21.1533 14.44 25.26C15.0267 25.1133 15.8333 25.04 16.86 25.04C19.7933 25.04 22.0667 26.0667 23.68 28.12C25.2933 30.1733 26.1 32.6667 26.1 35.6Z" fill="#203253" />
        </svg>
        <Typography className='font-normal font-raleway !leading-[19.6px] lg:!leading-[25.2px] text-textPrimary lg:text-lg text-sm col-span-7 lg:mt-[110px] lg:mb-[115px] self-center md:max-w-[596px] max-w-[180px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</Typography> <br />
        <svg className='lg:w-20 lg:h-auto h-10 absolute lg:static right-5 bottom-10 max-w-[75px] lg:translate-y-[110px] lg:col-start-9 rotate-180 ' viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.22 35.6C58.22 38.9733 57.12 41.6867 54.92 43.74C52.72 45.6467 49.9333 46.6 46.56 46.6C42.6 46.6 39.3 45.28 36.66 42.64C34.1667 40 32.92 36.1133 32.92 30.98C32.92 26.14 33.58 22.0333 34.9 18.66C36.3667 15.14 38.0533 12.2067 39.96 9.85999C42.0133 7.36666 44.0667 5.38666 46.12 3.91999C48.32 2.45332 50.2267 1.42666 51.84 0.839988L57.34 8.53999C54.1133 10.1533 51.4733 12.3533 49.42 15.14C47.5133 17.78 46.56 21.1533 46.56 25.26C47.1467 25.1133 47.9533 25.04 48.98 25.04C51.9133 25.04 54.1867 26.0667 55.8 28.12C57.4133 30.1733 58.22 32.6667 58.22 35.6ZM26.1 35.6C26.1 38.9733 25 41.6867 22.8 43.74C20.6 45.6467 17.8133 46.6 14.44 46.6C10.48 46.6 7.18 45.28 4.54 42.64C2.04667 40 0.800001 36.1133 0.800001 30.98C0.800001 26.14 1.46 22.0333 2.78 18.66C4.24667 15.14 5.93333 12.2067 7.84 9.85999C9.89333 7.36666 11.9467 5.38666 14 3.91999C16.2 2.45332 18.1067 1.42666 19.72 0.839988L25.22 8.53999C21.9933 10.1533 19.3533 12.3533 17.3 15.14C15.3933 17.78 14.44 21.1533 14.44 25.26C15.0267 25.1133 15.8333 25.04 16.86 25.04C19.7933 25.04 22.0667 26.0667 23.68 28.12C25.2933 30.1733 26.1 32.6667 26.1 35.6Z" fill="#203253" />
        </svg>


      </div>
      {/* 
      <div className="w-[70%] bg-lightBlue grid grid-cols-10 gap-5 p-10 pr-0 ">
        <svg className='w-20 place-self-start  ' viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.22 35.6C58.22 38.9733 57.12 41.6867 54.92 43.74C52.72 45.6467 49.9333 46.6 46.56 46.6C42.6 46.6 39.3 45.28 36.66 42.64C34.1667 40 32.92 36.1133 32.92 30.98C32.92 26.14 33.58 22.0333 34.9 18.66C36.3667 15.14 38.0533 12.2067 39.96 9.85999C42.0133 7.36666 44.0667 5.38666 46.12 3.91999C48.32 2.45332 50.2267 1.42666 51.84 0.839988L57.34 8.53999C54.1133 10.1533 51.4733 12.3533 49.42 15.14C47.5133 17.78 46.56 21.1533 46.56 25.26C47.1467 25.1133 47.9533 25.04 48.98 25.04C51.9133 25.04 54.1867 26.0667 55.8 28.12C57.4133 30.1733 58.22 32.6667 58.22 35.6ZM26.1 35.6C26.1 38.9733 25 41.6867 22.8 43.74C20.6 45.6467 17.8133 46.6 14.44 46.6C10.48 46.6 7.18 45.28 4.54 42.64C2.04667 40 0.800001 36.1133 0.800001 30.98C0.800001 26.14 1.46 22.0333 2.78 18.66C4.24667 15.14 5.93333 12.2067 7.84 9.85999C9.89333 7.36666 11.9467 5.38666 14 3.91999C16.2 2.45332 18.1067 1.42666 19.72 0.839988L25.22 8.53999C21.9933 10.1533 19.3533 12.3533 17.3 15.14C15.3933 17.78 14.44 21.1533 14.44 25.26C15.0267 25.1133 15.8333 25.04 16.86 25.04C19.7933 25.04 22.0667 26.0667 23.68 28.12C25.2933 30.1733 26.1 32.6667 26.1 35.6Z" fill="#203253" />
        </svg>
        <Typography className='font-normal text-textPrimary col-span-7 py-16 self-center  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</Typography> <br />
        <svg className='w-20 place-self-end justify-self-end col-start-9 rotate-180 ' viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.22 35.6C58.22 38.9733 57.12 41.6867 54.92 43.74C52.72 45.6467 49.9333 46.6 46.56 46.6C42.6 46.6 39.3 45.28 36.66 42.64C34.1667 40 32.92 36.1133 32.92 30.98C32.92 26.14 33.58 22.0333 34.9 18.66C36.3667 15.14 38.0533 12.2067 39.96 9.85999C42.0133 7.36666 44.0667 5.38666 46.12 3.91999C48.32 2.45332 50.2267 1.42666 51.84 0.839988L57.34 8.53999C54.1133 10.1533 51.4733 12.3533 49.42 15.14C47.5133 17.78 46.56 21.1533 46.56 25.26C47.1467 25.1133 47.9533 25.04 48.98 25.04C51.9133 25.04 54.1867 26.0667 55.8 28.12C57.4133 30.1733 58.22 32.6667 58.22 35.6ZM26.1 35.6C26.1 38.9733 25 41.6867 22.8 43.74C20.6 45.6467 17.8133 46.6 14.44 46.6C10.48 46.6 7.18 45.28 4.54 42.64C2.04667 40 0.800001 36.1133 0.800001 30.98C0.800001 26.14 1.46 22.0333 2.78 18.66C4.24667 15.14 5.93333 12.2067 7.84 9.85999C9.89333 7.36666 11.9467 5.38666 14 3.91999C16.2 2.45332 18.1067 1.42666 19.72 0.839988L25.22 8.53999C21.9933 10.1533 19.3533 12.3533 17.3 15.14C15.3933 17.78 14.44 21.1533 14.44 25.26C15.0267 25.1133 15.8333 25.04 16.86 25.04C19.7933 25.04 22.0667 26.0667 23.68 28.12C25.2933 30.1733 26.1 32.6667 26.1 35.6Z" fill="#203253" />
        </svg>


      </div> */}

    </div>
  )
}

export default Manager
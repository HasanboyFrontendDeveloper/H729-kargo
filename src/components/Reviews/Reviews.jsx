import { Typography } from '@material-tailwind/react'
import React from 'react'
import ReviewCard from './ReviewCard'
import Slider from 'react-slick'


const reviewCards = [
    {
        avatarName: 'Ryan Reynolds',
        avatarImg: 'https://docs.material-tailwind.com/img/face-2.jpg',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatarName: 'Madina Murodova',
        avatarImg: 'https://docs.material-tailwind.com/img/face-1.jpg',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    // {
    //     avatarName: 'Elnura Haqnazarova',
    //     avatarImg: 'https://docs.material-tailwind.com/img/face-3.jpg',
    //     rating: 4,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    // },
]

const Reviews = () => {


    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1150,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 initialSlide: 2
    //             }
    //         },
    //     ]
    // };

    return (
        <div className='lg:max-w-[1276px] max-h-[534px] md:max-w-[90%] max-w-[90%] mx-auto my-[60px] '>

            <div className="flex sm:flex-row sm:justify-between flex-col gap-7 pb-5">

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold font-raleway !leading-[46.96px] md:text-[40px] sm:text-[35px] text-[24px] ' >
                    Отзывы <br /> о нашей работе
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[630px] max-w-[90%] font-normal font-raleway !leading-[25.2px] text-lg my-[22px] ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>


            <div className="py-10 flex gap-5 ">


                {reviewCards.map((item, index) => (

                    <ReviewCard {...item} key={index} />
                ))}

                {/* <Slider {...settings} className='gap-5' >
                    {reviewCards.map((item, index) => (

                        <ReviewCard {...item} key={index} />
                    ))}
                </Slider> */}
            </div>

        </div>
    )
}

export default Reviews
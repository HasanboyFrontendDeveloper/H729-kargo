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


const TrainIcon = ({ className }) => {
    return (
        <svg width="43" height="43" className={className} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="43" height="43" fill="url(#pattern0_182_6459)" />
            <defs>
                <pattern id="pattern0_182_6459" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_182_6459" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_182_6459" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAyLTI4VDExOjU5OjA2KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMi0yOFQxMTo1OToxNSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0yOFQxMTo1OToxNSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMjE5N2E3MS1kYTE4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" />
            </defs>
        </svg>
    )
}

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
        <div className='lg:max-w-[1276px] lg:max-h-[534px]  md:max-w-[90%] max-w-[280px] mx-auto my-[60px] '>

            <div className="flex sm:flex-row sm:justify-between flex-col lg:gap-7 gap-[10px] lg:mb-10 mb-[25px] ">

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold font-raleway !leading-[28.18px] lg:!leading-[46.96px] md:text-[40px] sm:text-[35px] text-[24px] ' >
                    Отзывы <br /> о нашей работе
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[630px] max-w-[90%] font-normal font-raleway leading-[19.6px] lg:!leading-[25.2px] text-sm lg:text-lg lg:my-[22px] ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>


            <div className="flex gap-5 ">


                {reviewCards.map((item, index) => (

                    <ReviewCard {...item} index={index} key={index} />
                ))}

                {/* <Slider {...settings} className='gap-5' >
                    {reviewCards.map((item, index) => (

                        <ReviewCard {...item} key={index} />
                    ))}
                </Slider> */}
            </div>


            <div className="flex lg:hidden justify-between items-center relative mt-[25px] ">
                <div className="border-t-[6px] h-2 lg:w-full w-[83%] right-0 absolute border-darkBlue bordwe border-dashed lg:translate-y-[11px] translate-y-[9px] ">
                </div>

                <div className='z-10  ' >
                    <TrainIcon className='' />
                </div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
            </div>

        </div>
    )
}

export default Reviews
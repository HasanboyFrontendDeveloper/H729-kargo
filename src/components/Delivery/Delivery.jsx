import { Typography } from '@material-tailwind/react'
import React from 'react'
import { DeliveryCard } from '../'
import { PlaneTakeoff, Ship, TrainFront, Truck } from 'lucide-react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const DeliveryCards = [
    {
        icon: <PlaneTakeoff className=' size-[42px] ' />,
        title: 'Авиа \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Truck className=' size-[42px] '   />,
        title: 'Авто \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <TrainFront className=' size-[42px] '  />,
        title: 'Ж/Д \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Ship className=' size-[42px] '  />,
        title: "Морские \n перевозки",
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
]

const TruckIcon = ({ className }) => {
    return (
        <svg width="49" height="49" className={className} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.25" y="0.271973" width="48" height="48" fill="url(#pattern0_182_6453)" />
            <defs>
                <pattern id="pattern0_182_6453" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_182_6453" transform="translate(-0.0253704 0.0509348) scale(0.00195312)" />
                </pattern>
                <image id="image0_182_6453" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAyLTI4VDExOjQ0OjE3KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMi0yOFQxMTo0NToyNiswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0yOFQxMTo0NToyNiswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMDlhYzA3OC1iMzZj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" />
            </defs>
        </svg>
    )
}

const Delivery = ({ handleOpen }) => {

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1060,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    return (
        <div className='lg:max-w-[1280px] lg:max-h-[578px] max-h-[606px] md:max-w-[90%] max-w-[280px] mx-auto mb-[60px] '>

            <div className="flex sm:flex-row sm:justify-between items-center flex-col lg:gap-7 gap-[10px] lg:my-[60px] mt-[60px] mb-[25px] ">

                <Typography className='text-primary sm:max-w-[462px] max-w-[350px] font-bold font-raleway md:text-[40px] lg:!leading-[46.96px] !leading-[28.18px] sm:text-[35px] text-[24px] ' >
                    Выберите подходящий
                    вариант доставки
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[630px] max-w-[280px] font-normal font-raleway lg:text-lg text-sm lg:!leading-[25.2px] !leading-[19.6px] lg:my-[22px] lg:max-h-[50px] max-h-[80px] ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>

            <div className="flex gap-5 ">


                {DeliveryCards.map((item, index) => (
                    <DeliveryCard item={item} index={index} key={item.title} handleOpen={handleOpen} />

                ))}

                {/* <Slider {...settings}  >
                    {DeliveryCards.map((item) => (
                        <DeliveryCard item={item} key={item.title} handleOpen={handleOpen} />

                    ))}
                </Slider> */}
            </div>


            <div className="flex lg:hidden justify-between items-center relative mt-[25px] ">
                <div className="border-t-[6px] h-2 lg:w-full w-[83%] right-0 absolute border-darkBlue bordwe border-dashed lg:translate-y-[11px] translate-y-[9px] ">
                </div>

                <div className='z-10  ' >
                    <TruckIcon className='' />
                </div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
                <div className='w-[21.02px] h-[20.62px] rounded-full bg-darkBlue lg:translate-y-[11px] translate-y-[9px]  ' ></div>
            </div>

        </div>
    )
}

export default Delivery
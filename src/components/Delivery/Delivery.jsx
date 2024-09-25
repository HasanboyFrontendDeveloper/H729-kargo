import { Typography } from '@material-tailwind/react'
import React from 'react'
import { DeliveryCard } from '../'
import { PlaneTakeoff, Ship, TrainFront, Truck } from 'lucide-react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const DeliveryCards = [
    {
        icon: <PlaneTakeoff size={48} />,
        title: 'Авиа \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Truck size={48} />,
        title: 'Авто \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <TrainFront size={48} />,
        title: 'Ж/Д \n перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Ship size={48} />,
        title: "Морские \n перевозки",
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
]

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
        <div className='lg:max-w-[1280px] max-h-[578px] md:max-w-[90%] max-w-[90%] mx-auto '>

            <div className="flex sm:flex-row sm:justify-between items-center flex-col gap-7 my-[60px] ">

                <Typography className='text-primary sm:max-w-[462px] max-w-[350px] font-bold font-raleway md:text-[40px] !leading-[46.96px] sm:text-[35px] text-[24px] ' >
                    Выберите подходящий
                    вариант доставки
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[630px] max-w-[90%] font-normal font-raleway text-lg !leading-[25.2px] my-[22px] max-h-[50px] ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>

            <div className="flex gap-5 ">


                {DeliveryCards.map((item) => (
                    <DeliveryCard item={item} key={item.title} handleOpen={handleOpen} />

                ))}

                {/* <Slider {...settings}  >
                    {DeliveryCards.map((item) => (
                        <DeliveryCard item={item} key={item.title} handleOpen={handleOpen} />

                    ))}
                </Slider> */}
            </div>

        </div>
    )
}

export default Delivery
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
        title: 'Авиа перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Truck size={48} />,
        title: 'Авто перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <TrainFront size={48} />,
        title: 'Ж/Д перевозки',
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
    {
        icon: <Ship size={48} />,
        title: "Морские перевозки",
        date: '6-10 дней',
        price: 'от $5.5 за кг',
    },
]

const Delivery = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='lg:max-w-screen-lg md:max-w-[90%] max-w-[90%] mx-auto '>

            <div className="flex sm:flex-row sm:justify-between flex-col gap-7 pb-5">

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold md:text-[40px] sm:text-[35px] text-[24px] ' >
                    Выберите подходящий
                    вариант доставки
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[480px] max-w-[90%] font-medium ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>

            <div className="py-10 ">


                <Slider {...settings}>
                    {DeliveryCards.map((item) => (
                        <DeliveryCard item={item} key={item.title} />

                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Delivery
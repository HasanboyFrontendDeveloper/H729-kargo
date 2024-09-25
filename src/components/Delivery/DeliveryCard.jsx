import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

const DeliveryCard = ({ item, handleOpen }) => {
    return (
        <div className='w-[304px] max-h-[424px] bg-lightBlue rounded-3xl py-12 pl-[38px] pr-[42px] flex flex-col '>
            {/* <div className='w-[290px] mx-auto bg-lightBlue rounded-3xl py-10 px-7 my-5 flex flex-col gap-2 hover:-translate-y-5 transition-all duration-300 '> */}
            <div className="p-2 max-w-min rounded-full bg-darkBlue text-white">

                {item.icon}
            </div>
            <Typography className='text-primary font-bold font-raleway text-2xl mb-5 mt-[27px] !leading-[28.18px] whitespace-pre-line ' >{item.title}</Typography>
            <Typography className='text-textPrimary font-normal font-raleway text-xl !leading-[28px] ' >{item.date}</Typography>
            <Typography className='text-primary font-semibold font-raleway text-xl mb-10 !leading-[28px] ' >{item.price}</Typography>

            <Button onClick={() => handleOpen()} className='bg-primary normal-case py-[18px] px-[77.5px] font-raleway font-semibold text-base !leading-[18.78px] hover:bg-darkBlue duration-300 ' >Заказать</Button>

        </div>
    )
}

export default DeliveryCard
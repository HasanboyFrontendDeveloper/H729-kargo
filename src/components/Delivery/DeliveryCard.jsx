import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

const DeliveryCard = ({ item, handleOpen, index }) => {
    return (
        <div className={`lg:w-[304px] w-[280px] bg-lightBlue rounded-3xl lg:py-12 pt-[49.5px] pb-[28.5px] px-[20px] lg:pl-[38px] lg:pr-[42px] flex-col ${index >= 1 ? "hidden lg:flex" :'flex' } `}>
            {/* <div className='w-[290px] mx-auto bg-lightBlue rounded-3xl py-10 px-7 my-5 flex flex-col gap-2 hover:-translate-y-5 transition-all duration-300 '> */}
            <div className="p-[15px] max-w-min rounded-full bg-darkBlue text-white">

                {item.icon}
            </div>
            <Typography className='text-primary font-bold font-raleway lg:text-2xl text-xl mb-5 lg:mt-[19px] mt-[10px] lg:!leading-[28.18px] leading-[23.48px] whitespace-pre-line ' >{item.title}</Typography>
            <Typography className='text-textPrimary font-normal font-raleway lg:text-xl text-base !leading-[22.4px] lg:!leading-[28px] mb-[10px] ' >{item.date}</Typography>
            <Typography className='text-primary font-semibold font-raleway lg:text-xl text-base mb-10 lg:!leading-[28px] !leading-[22.4px] ' >{item.price}</Typography>

            <Button onClick={() => handleOpen()} className='bg-primary normal-case lg:py-[18px] py-3 px-[89.5px] lg:px-[77.5px] font-raleway font-semibold lg:text-base text-sm !leading-[16.44px] lg:!leading-[18.78px] hover:bg-darkBlue duration-300 ' >Заказать</Button>

        </div>
    )
}

export default DeliveryCard
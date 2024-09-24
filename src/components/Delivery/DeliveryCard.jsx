import { Button, Typography } from '@material-tailwind/react'
import { PlaneTakeoff } from 'lucide-react'
import React from 'react'

const DeliveryCard = ({ item, handleOpen }) => {
    return (
        <div className='w-[290px] mx-auto bg-lightBlue rounded-3xl py-10 px-7 my-5 flex flex-col gap-2 hover:-translate-y-5 transition-all duration-300 '>
        {/* <div className='w-[290px] mx-auto bg-lightBlue rounded-3xl py-10 px-7 my-5 flex flex-col gap-2 hover:-translate-y-5 transition-all duration-300 '> */}
            <div className="p-2 max-w-min rounded-full bg-darkBlue text-white">

                {item.icon}
            </div>
            <Typography className='text-primary font-semibold text-2xl py-5 ' >{item.title}</Typography>
            <Typography className='text-primary font-normal text-xl ' >{item.date}</Typography>
            <Typography className='text-primary font-semibold text-xl pb-7 ' >{item.price}</Typography>

            <Button onClick={() => handleOpen()} className='bg-primary py-5 hover:bg-darkBlue duration-300 ' >Заказать</Button>

        </div>
    )
}

export default DeliveryCard
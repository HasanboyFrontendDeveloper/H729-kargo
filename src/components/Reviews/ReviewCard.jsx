import { Avatar, Card, CardBody, CardFooter, CardHeader, Rating } from '@material-tailwind/react'
import { Star } from 'lucide-react'
import React from 'react'

const ReviewCard = ({ avatarName, avatarImg, text, rating }) => {
    return (
        <Card className=' shadow-none max-w-[628px] max-h-[400px] bg-lightBlue py-[50px] pl-9 pr-[39px] ' >
            <CardBody className='p-0'>
                <div className="flex gap-[30px] items-center  ">

                    <span className=' font-bold text-2xl text-primary !leading-[28.18px] ' >Отзыв </span>

                    <div className="flex gap-[2.32px] ">
                        <Star className='size-[18px] text-darkBlue ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue ' fill='#72B3EA' />
                    </div>

                </div>
                <p className='text-textPrimary font-normal font-raleway !leading-[22.4px] my-[30px]  max-h-[300px] overflow-y-scroll sm:overflow-auto ' >{text}</p>
            </CardBody>

            <CardFooter className='flex gap-5 items-center p-0 pt-[10px] '>

                {/* <Avatar src={avatarImg} alt="avatar" className='bg-darkBlue' /> */}
                <div className="w-12 h-12 bg-darkBlue rounded-full "></div>
                <span className='font-bold text-lg !leading-[21.13px] text-primary' >Имя Фамилия</span>
                {/* <span className='font-bold text-lg !leading-[21.13px] text-primary' >{avatarName}</span> */}

            </CardFooter>
        </Card>
    )
}

export default ReviewCard
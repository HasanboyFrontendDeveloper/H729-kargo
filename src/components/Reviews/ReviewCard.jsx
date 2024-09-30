import { Avatar, Card, CardBody, CardFooter, CardHeader, Rating } from '@material-tailwind/react'
import { Star } from 'lucide-react'
import React from 'react'

const ReviewCard = ({ avatarName, avatarImg, text, rating, index }) => {
    return (
        <Card className={`shadow-none max-w-[628px] rounded-3xl lg:max-h-[400px] bg-lightBlue lg:py-[50px] lg:pl-9 lg:pr-[39px] p-5 pb-[22px] ${index >= 1 && 'hidden lg:block' } `} >
            <CardBody className='p-0'>
                <div className="flex gap-[30px] items-center  ">

                    <span className=' font-bold text-xl lg:text-2xl text-primary !leading-[23.48px] lg:!leading-[28.18px] ' >Отзыв </span>

                    <div className="flex gap-[2.32px] my-[2.5px] lg:my-0 ">
                        <Star className='size-[18px] text-darkBlue p-[1px] lg:p-0 ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue p-[1px] lg:p-0 ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue p-[1px] lg:p-0 ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue p-[1px] lg:p-0 ' fill='#72B3EA' />
                        <Star className='size-[18px] text-darkBlue p-[1px] lg:p-0 ' fill='#72B3EA' />
                    </div>

                </div>
                <p className='text-textPrimary font-normal font-raleway text-sm lg:text-base !leading-[19.6px] lg:!leading-[22.4px] lg:my-[30px] mt-[15px] mb-5 max-h-[300px] ' >{text}</p>
            </CardBody>

            <CardFooter className='flex gap-5 items-center p-0 pt-[10px] '>

                {/* <Avatar src={avatarImg} alt="avatar" className='bg-darkBlue' /> */}
                <div className="lg:w-12 w-8 lg:h-12 h-8 bg-darkBlue rounded-full "></div>
                <span className='font-bold lg:text-lg text-xs !leading-[14.09px] lg:!leading-[21.13px] text-primary' >Имя Фамилия</span>
                {/* <span className='font-bold text-lg !leading-[21.13px] text-primary' >{avatarName}</span> */}

            </CardFooter>
        </Card>
    )
}

export default ReviewCard
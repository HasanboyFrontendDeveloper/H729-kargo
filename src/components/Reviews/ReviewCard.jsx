import { Avatar, Card, CardBody, CardFooter, CardHeader, Rating } from '@material-tailwind/react'
import React from 'react'

const ReviewCard = ({ avatarName, avatarImg, text, rating }) => {
    return (
        <Card className=' max-w-[500px] bg-lightBlue my-5 mx-auto ' >
            <CardBody>
                <h1 className='pb-5 font-bold text-2xl text-primary flex gap-5 ' >Отзыв  <Rating value={rating} readonly unratedColor="blue" ratedColor="blue" className='text-darkBlue' /> </h1>

                <p className='text-textPrimary font-normal max-h-[300px] overflow-y-scroll sm:overflow-auto ' >{text}</p>
            </CardBody>

            <CardFooter>

                <div className="flex gap-5 items-center ">
                    <Avatar src={avatarImg} alt="avatar" className='bg-darkBlue' />
                    <span className='font-bold text-lg text-primary' >{avatarName}</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ReviewCard
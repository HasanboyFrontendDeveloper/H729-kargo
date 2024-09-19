import { Typography } from '@material-tailwind/react'
import React from 'react'

const OurCases = () => {
    return (
        <div className='md:max-w-screen-lg mx-auto '>
            <div className="flex justify-between pb-5">

                <Typography className='text-primary font-bold md:text-[50px] ss:text-[35px] text-[30px] ' >
                    Наши кейсы
                </Typography>

                <Typography className='text-textPrimary font-medium max-w-[500px]  ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>

            <div className="my-5">
                <div className=""></div>
                <div className=""></div>
            </div>

        </div>
    )
}

export default OurCases
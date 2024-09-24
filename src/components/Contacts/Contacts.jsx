import { Button, Input, Typography } from '@material-tailwind/react'
import { AtSign, Mail, Phone, Smartphone, User } from 'lucide-react'
import React from 'react'

const Contacts = () => {
    return (
        <div className='lg:max-w-screen-lg md:max-w-[90%] max-w-[90%] mx-auto py-5 flex flex-col md:flex-row gap-5 '>
            <form className="bg-lightBlue max-w-[550px] p-7 flex flex-col gap-4 rounded-2xl mx-auto ">
                <Input
                    className='placeholder:opacity-100 placeholder:text-textPrimary focus:text-primary active:text-primary border-2 border-transparent active:border-transparent focus:border-transparent focus:border-b-darkBlue active:border-b-darkBlue bg-[#e4f3ff] rounded-2xl '
                    placeholder='Ваше имя'
                    containerProps={{ outline: 'none' }}
                    icon={<User />}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Input
                    className='placeholder:opacity-100 placeholder:text-textPrimary focus:text-primary active:text-primary border-2 border-transparent active:border-transparent focus:border-transparent focus:border-b-darkBlue active:border-b-darkBlue bg-[#e4f3ff] rounded-2xl '
                    placeholder='Введите ваш номер телефона'
                    containerProps={{ outline: 'none' }}
                    icon={<Phone />}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Input
                    className='placeholder:opacity-100 placeholder:text-textPrimary focus:text-primary active:text-primary border-2 border-transparent active:border-transparent focus:border-transparent focus:border-b-darkBlue active:border-b-darkBlue bg-[#e4f3ff] rounded-2xl '
                    placeholder='Ваша электронная почта'
                    containerProps={{ outline: 'none' }}
                    icon={<Mail />}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Input
                    className='placeholder:opacity-100 placeholder:text-textPrimary focus:text-primary active:text-primary border-2 border-transparent active:border-transparent focus:border-transparent focus:border-b-darkBlue active:border-b-darkBlue bg-[#e4f3ff] rounded-2xl '
                    placeholder='Какой товар вы ищите или хотите доставить в Россию?'
                    containerProps={{ outline: 'none' }}
                    labelProps={{
                        className: "hidden",
                    }}
                />

                <Button className='bg-primary py-3 hover:bg-darkBlue duration-300 my-2 ' >Заказать</Button>

                <p className='text-textPrimary font-normal text-sm sm:text-base ' >Отправляя заявку вы соглашаетесь с Условиями использования  и Политикой конфиденциальности, тем самым соглашаетесь на обработку персональных данных</p>
            </form>


            <div className="sm:p-10 mx-auto">

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold md:text-[35px] sm:text-[30px] text-[24px] ' >
                    Рассчитайте стоимость доставки, отправив заявку
                </Typography>

                <Typography className='text-textPrimary sm:max-w-[480px] max-w-[90%] sm:text-base text-sm font-normal ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <div className="p-5 ">
                    <div className="flex items-center gap-5">
                        <div className="p-3 max-w-min rounded-full bg-darkBlue text-white">
                            <Smartphone className='size-10 xs:size-12'  />
                        </div>

                        <div className="py-4 ">

                            <Typography className='text-primary font-bold xs:text-2xl text-base' >
                                WhatsApp & WeChat
                            </Typography>

                            <Typography className='text-darkBlue font-bold xs:text-base text-sm ' >
                                +86 19817983305
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="p-3 max-w-min rounded-full bg-darkBlue text-white">
                            <AtSign className='size-10 xs:size-12' />
                        </div>

                        <div className="py-4 ">

                            <Typography className='text-primary font-bold xs:text-2xl text-base' >
                                Электронная почта
                            </Typography>

                            <Typography className='text-darkBlue font-bold xs:text-base text-sm' >
                                1325427621@qq.com
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts
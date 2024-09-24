import React from "react";
import {
    Button,
    Dialog,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Mail, Phone, User } from 'lucide-react'

const Modal = ({ handleOpen, open }) => {

    return (
        <>
            <Dialog size="sm" open={open} handler={handleOpen} className="bg-lightBlue max-w-[550px] p-7 flex flex-col gap-4 rounded-2xl " >

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold md:text-[40px] sm:text-[35px] text-[24px] ' >
                    Заполните форму
                </Typography>

                <form className="flex flex-col gap-4">
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
            </Dialog>
        </>
    );
}

export default Modal
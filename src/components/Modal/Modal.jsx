import React from "react";
import {
    Button,
    Dialog,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Mail, Phone, User, X } from 'lucide-react'

const Modal = ({ handleOpen, open }) => {

    return (
        <>
            <Dialog size="md" open={open} handler={handleOpen} className="bg-lightBlue relative lg:max-w-[800px] p-7 flex flex-col gap-4 rounded-2xl " >

                <Typography className='text-primary sm:max-w-[480px] max-w-[350px] font-bold md:text-[40px] sm:text-[35px] text-[24px] ' >
                    Заполните форму 
                </Typography>

                <X size={36} className="absolute top-5 right-5 cursor-pointer hover:text-darkBlue duration-300 " onClick={() => handleOpen()} />

                <form className="bg-lightBlue max-h-[511px] pt-[50px] pl-[36px] pr-[39px] pb-[40px] flex flex-col gap-4 rounded-2xl ">

                <div className="relative">

                    <input
                        type="text"
                        className='
                    bg-[#E6F1FA] rounded-xl py-[13px] px-6 w-full outline-darkBlue 
                        placeholder:!leading-[18.78px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                        placeholder='Ваше имя'
                    />

                    <svg width="21.33px" height="20.7px" className='absolute right-[18px] top-[16px] ' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7.9751C6.9 7.9751 6 7.6251 5.3 6.9251C4.6 6.2251 4.25 5.3251 4.25 4.2251C4.25 3.1251 4.6 2.2251 5.3 1.5251C6 0.825098 6.9 0.475098 8 0.475098C9.1 0.475098 10 0.825098 10.7 1.5251C11.4 2.2251 11.75 3.1251 11.75 4.2251C11.75 5.3251 11.4 6.2251 10.7 6.9251C10 7.6251 9.1 7.9751 8 7.9751ZM0 16.0001V13.6501C0 13.0168 0.158333 12.4751 0.475 12.0251C0.791667 11.5751 1.2 11.2334 1.7 11.0001C2.81667 10.5001 3.8875 10.1251 4.9125 9.8751C5.9375 9.6251 6.96667 9.5001 8 9.5001C9.03333 9.5001 10.0583 9.62926 11.075 9.8876C12.0917 10.1459 13.1583 10.5168 14.275 11.0001C14.7917 11.2334 15.2083 11.5751 15.525 12.0251C15.8417 12.4751 16 13.0168 16 13.6501V16.0001H0Z" fill="#203253" />
                    </svg>
                </div>

                <div className="relative">

                    <input
                        type="tel"
                        className='
                    bg-[#E6F1FA] rounded-xl py-[13px] px-6 w-full outline-darkBlue
                        placeholder:!leading-[18.78px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                        placeholder='Введите ваш номер телефона'
                    />

                    <svg width="18px" height="18px" className='absolute right-[18px] top-[16px] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 24C19.7889 24 17.0944 23.3333 14.4167 22C11.7389 20.6667 9.33333 18.9333 7.2 16.8C5.06667 14.6667 3.33333 12.2611 2 9.58333C0.666667 6.90556 0 4.21111 0 1.5C0 1.07778 0.144444 0.722222 0.433333 0.433333C0.722222 0.144444 1.07778 0 1.5 0H6.16667C6.47778 0 6.75 0.105556 6.98333 0.316667C7.21667 0.527778 7.36667 0.811111 7.43333 1.16667L8.33333 5.36667C8.37778 5.67778 8.37222 5.96111 8.31667 6.21667C8.26111 6.47222 8.14444 6.68889 7.96667 6.86667L4.63333 10.2333C5.87778 12.3 7.27222 14.1 8.81667 15.6333C10.3611 17.1667 12.1111 18.4667 14.0667 19.5333L17.2333 16.2667C17.4556 16.0222 17.7111 15.85 18 15.75C18.2889 15.65 18.5778 15.6333 18.8667 15.7L22.8333 16.5667C23.1667 16.6333 23.4444 16.8 23.6667 17.0667C23.8889 17.3333 24 17.6444 24 18V22.5C24 22.9222 23.8556 23.2778 23.5667 23.5667C23.2778 23.8556 22.9222 24 22.5 24Z" fill="#203253" />
                    </svg>
                </div>

                <div className="relative">

                    <input
                        type="email"
                        className='
                    bg-[#E6F1FA] rounded-xl py-[13px] px-6 w-full outline-darkBlue
                        placeholder:!leading-[18.78px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                        placeholder='Ваша электронная почта'
                    />
                    <svg width="22px" height="22px" className='absolute right-[18px] top-[12px] ' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.79175 21.6667C3.35841 21.6667 2.97925 21.5042 2.65425 21.1792C2.32925 20.8542 2.16675 20.475 2.16675 20.0417V5.95837C2.16675 5.52504 2.32925 5.14587 2.65425 4.82087C2.97925 4.49587 3.35841 4.33337 3.79175 4.33337H22.2084C22.6417 4.33337 23.0209 4.49587 23.3459 4.82087C23.6709 5.14587 23.8334 5.52504 23.8334 5.95837V20.0417C23.8334 20.475 23.6709 20.8542 23.3459 21.1792C23.0209 21.5042 22.6417 21.6667 22.2084 21.6667H3.79175ZM13.0001 13.4875L22.2084 7.44796V5.95837L13.0001 11.8625L3.79175 5.95837V7.44796L13.0001 13.4875Z" fill="#203253" />
                    </svg>

                </div>

                <div className="relative">

                    <input
                        type="text"
                        className='
                    bg-[#E6F1FA] rounded-xl py-[13px] px-6 w-full outline-darkBlue
                        placeholder:!leading-[18.78px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                        placeholder='Какой товар вы ищите или хотите доставить в Россию?'
                    />

                </div>

                <Button className='bg-primary font-semibold font-raleway normal-case !leading-[18.78px] text-base py-[18px] px-[139.5px] hover:bg-darkBlue duration-300 my-2 ' >Получить 100$ скидку на доставку</Button>

                <p className='text-textPrimary font-normal text-sm sm:text-base ' >Отправляя заявку вы соглашаетесь с <span className='underline leading-[22.4px] underline-offset-2 '>Условиями использования</span>  и <span className='underline leading-[22.4px] underline-offset-2 '>Политикой конфиденциальности</span>, тем самым соглашаетесь на обработку персональных данных</p>
            </form>
            </Dialog>
            {/* <div className="bg-[#20325333] fixed top-0 left-0 h-[100vh] z-10 w-full " >
                <div className="bg-lightBlue max-w-[800px] max-h-[781px] ">

                </div>
            </div> */}
        </>
    );
}

export default Modal
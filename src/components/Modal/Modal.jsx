import React from "react";
import {
    Button,
    Dialog,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Mail, Phone, User, X } from 'lucide-react'

const Modal = ({ handleOpen, open }) => {

    const closeHandler = (e) => {
        const classname = e?.target?.className
        if (classname.includes('modal')) {
            handleOpen()
        }
    }

    console.log(open);


    return (
        <>

            
            <div className={`modal flex justify-center items-center bg-[#20325333] fixed top-0 left-0 h-[100vh] z-10 w-full ${open ? 'block' : 'hidden'} `} onClick={closeHandler} >
                <div className="bg-lightBlue max-w-[800px] max-h-[781px] mx-auto flex flex-col gap-4 rounded-2xl pt-[60px] pb-[80px] px-[65px] ">
                    <div className="max-w-[670px] mx-auto relative ">

                        <div className="flex justify-between items-center mb-[60px]">

                            <Typography className='text-primary sm:max-w-[422px] max-w-[350px] font-bold font-raleway md:text-[48px] !leading-[56.35px] sm:text-[35px] text-[24px] ' >
                                Заполните форму
                            </Typography>

                            <svg width="30" height="30" className="cursor-pointer duration-300 fill-[#203253] hover:fill-darkBlue " onClick={() => handleOpen()} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className=" " d="M3.4499 29.85L0.149902 26.55L11.6999 15L0.149902 3.45002L3.4499 0.150024L14.9999 11.7L26.5499 0.150024L29.8499 3.45002L18.2999 15L29.8499 26.55L26.5499 29.85L14.9999 18.3L3.4499 29.85Z" />
                            </svg>

                            {/* <X size={48} className="cursor-pointer hover:text-darkBlue duration-300 " onClick={() => handleOpen()} /> */}

                        </div>


                        <form className="bg-lightBlue max-h-[511px] flex flex-col gap-4 rounded-2xl ">

                            <div className="relative">

                                <input
                                    type="text"
                                    className='
                    bg-[#E6F1FA] rounded-xl pt-[21px] pb-5 px-[23px] w-full outline-darkBlue 
                        placeholder:!leading-[23.48px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium placeholder:text-[20px] active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                                    placeholder='Ваше имя'
                                />

                                {/* <svg width="21.33px" height="20.7px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 7.9751C6.9 7.9751 6 7.6251 5.3 6.9251C4.6 6.2251 4.25 5.3251 4.25 4.2251C4.25 3.1251 4.6 2.2251 5.3 1.5251C6 0.825098 6.9 0.475098 8 0.475098C9.1 0.475098 10 0.825098 10.7 1.5251C11.4 2.2251 11.75 3.1251 11.75 4.2251C11.75 5.3251 11.4 6.2251 10.7 6.9251C10 7.6251 9.1 7.9751 8 7.9751ZM0 16.0001V13.6501C0 13.0168 0.158333 12.4751 0.475 12.0251C0.791667 11.5751 1.2 11.2334 1.7 11.0001C2.81667 10.5001 3.8875 10.1251 4.9125 9.8751C5.9375 9.6251 6.96667 9.5001 8 9.5001C9.03333 9.5001 10.0583 9.62926 11.075 9.8876C12.0917 10.1459 13.1583 10.5168 14.275 11.0001C14.7917 11.2334 15.2083 11.5751 15.525 12.0251C15.8417 12.4751 16 13.0168 16 13.6501V16.0001H0Z" fill="#203253" />
                                </svg> */}
                                <svg width="32" height="32" className='absolute right-[23.3px] top-[21.97px] ' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9999 15.9667C14.5333 15.9667 13.3333 15.5 12.3999 14.5667C11.4666 13.6333 10.9999 12.4333 10.9999 10.9667C10.9999 9.50001 11.4666 8.30001 12.3999 7.36667C13.3333 6.43334 14.5333 5.96667 15.9999 5.96667C17.4666 5.96667 18.6666 6.43334 19.5999 7.36667C20.5333 8.30001 20.9999 9.50001 20.9999 10.9667C20.9999 12.4333 20.5333 13.6333 19.5999 14.5667C18.6666 15.5 17.4666 15.9667 15.9999 15.9667ZM5.33325 26.6667V23.5333C5.33325 22.6889 5.54436 21.9667 5.96659 21.3667C6.38881 20.7667 6.93325 20.3111 7.59992 20C9.08881 19.3333 10.5166 18.8333 11.8833 18.5C13.2499 18.1667 14.6221 18 15.9999 18C17.3777 18 18.7444 18.1722 20.0999 18.5167C21.4555 18.8611 22.8777 19.3556 24.3666 20C25.0555 20.3111 25.611 20.7667 26.0333 21.3667C26.4555 21.9667 26.6666 22.6889 26.6666 23.5333V26.6667H5.33325Z" fill="#203253" />
                                </svg>

                            </div>

                            <div className="relative">

                                <input
                                    type="tel"
                                    className='
                    bg-[#E6F1FA] rounded-xl pt-[21px] pb-5 px-[23px] w-full outline-darkBlue
                        placeholder:!leading-[23.48px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium placeholder:text-[20px] active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                                    placeholder='Введите ваш номер телефона'
                                />

                                <svg width="24px" height="24px" className='absolute right-[27px] top-[20px] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 24C19.7889 24 17.0944 23.3333 14.4167 22C11.7389 20.6667 9.33333 18.9333 7.2 16.8C5.06667 14.6667 3.33333 12.2611 2 9.58333C0.666667 6.90556 0 4.21111 0 1.5C0 1.07778 0.144444 0.722222 0.433333 0.433333C0.722222 0.144444 1.07778 0 1.5 0H6.16667C6.47778 0 6.75 0.105556 6.98333 0.316667C7.21667 0.527778 7.36667 0.811111 7.43333 1.16667L8.33333 5.36667C8.37778 5.67778 8.37222 5.96111 8.31667 6.21667C8.26111 6.47222 8.14444 6.68889 7.96667 6.86667L4.63333 10.2333C5.87778 12.3 7.27222 14.1 8.81667 15.6333C10.3611 17.1667 12.1111 18.4667 14.0667 19.5333L17.2333 16.2667C17.4556 16.0222 17.7111 15.85 18 15.75C18.2889 15.65 18.5778 15.6333 18.8667 15.7L22.8333 16.5667C23.1667 16.6333 23.4444 16.8 23.6667 17.0667C23.8889 17.3333 24 17.6444 24 18V22.5C24 22.9222 23.8556 23.2778 23.5667 23.5667C23.2778 23.8556 22.9222 24 22.5 24Z" fill="#203253" />
                                </svg>
                            </div>

                            <div className="relative">

                                <input
                                    type="email"
                                    className='
                    bg-[#E6F1FA] rounded-xl pt-[21px] pb-5 px-[23px] w-full outline-darkBlue
                        placeholder:!leading-[23.48px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium placeholder:text-[20px] active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                                    placeholder='Ваша электронная почта'
                                />
                                {/* <svg width="26px" height="26px" className='absolute right-[23.17px] top-[23.33px] ' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.79175 21.6667C3.35841 21.6667 2.97925 21.5042 2.65425 21.1792C2.32925 20.8542 2.16675 20.475 2.16675 20.0417V5.95837C2.16675 5.52504 2.32925 5.14587 2.65425 4.82087C2.97925 4.49587 3.35841 4.33337 3.79175 4.33337H22.2084C22.6417 4.33337 23.0209 4.49587 23.3459 4.82087C23.6709 5.14587 23.8334 5.52504 23.8334 5.95837V20.0417C23.8334 20.475 23.6709 20.8542 23.3459 21.1792C23.0209 21.5042 22.6417 21.6667 22.2084 21.6667H3.79175ZM13.0001 13.4875L22.2084 7.44796V5.95837L13.0001 11.8625L3.79175 5.95837V7.44796L13.0001 13.4875Z" fill="#203253" />
                                </svg> */}

                                <svg width="26" height="26" className='absolute right-[23.17px] top-[23.33px] ' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.79175 21.6667C3.35841 21.6667 2.97925 21.5042 2.65425 21.1792C2.32925 20.8542 2.16675 20.475 2.16675 20.0417V5.95837C2.16675 5.52504 2.32925 5.14587 2.65425 4.82087C2.97925 4.49587 3.35841 4.33337 3.79175 4.33337H22.2084C22.6417 4.33337 23.0209 4.49587 23.3459 4.82087C23.6709 5.14587 23.8334 5.52504 23.8334 5.95837V20.0417C23.8334 20.475 23.6709 20.8542 23.3459 21.1792C23.0209 21.5042 22.6417 21.6667 22.2084 21.6667H3.79175ZM13.0001 13.4875L22.2084 7.44796V5.95837L13.0001 11.8625L3.79175 5.95837V7.44796L13.0001 13.4875Z" fill="#203253" />
                                </svg>


                            </div>

                            <div className="relative">

                                <input
                                    type="text"
                                    className='
                    bg-[#E6F1FA] rounded-xl pt-[21px] pb-5 px-[23px] w-full outline-darkBlue
                        placeholder:!leading-[23.48px] placeholder:font-raleway placeholder:text-primary placeholder:font-medium placeholder:text-[20px] active:placeholder:text-darkBlue focus:placeholder:text-darkBlue 
                     '
                                    placeholder='Какой товар вы ищите или хотите доставить в Россию?'
                                />

                            </div>

                            <Button className='bg-primary font-semibold font-raleway normal-case !leading-[18.78px] text-base py-[18px] px-[139.5px] hover:bg-darkBlue duration-300 my-2 ' >Получить 100$ скидку на доставку</Button>

                            <p className='text-textPrimary font-normal font-raleway !leading-[28px] text-sm sm:text-[20px] ' >Отправляя заявку вы соглашаетесь с <span className='underline leading-[22.4px] underline-offset-2 '>Условиями использования</span>  и <span className='underline leading-[22.4px] underline-offset-2 '>Политикой конфиденциальности</span>, тем самым соглашаетесь на обработку персональных данных</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal
import {
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const NavList = ({ openNav, setOpenNav }) => {
    return (
        <div className={` ${openNav ? 'flex' : 'hidden'} justify-center items-center fixed top-0 z-50 left-0 w-full h-full bg-white`} >

            <svg width="32" height="32" className="absolute top-[14px] right-4 hover:fill-darkBlue fill-primary transition-colors cursor-pointer " onClick={() => setOpenNav(false)} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.3001 25.9L6.1001 23.7L13.8001 16L6.1001 8.29998L8.3001 6.09998L16.0001 13.8L23.7001 6.09998L25.9001 8.29998L18.2001 16L25.9001 23.7L23.7001 25.9L16.0001 18.2L8.3001 25.9Z" />
            </svg>

            <ul className="w-[238px] h-[243px] flex flex-col  ">
                {/* <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"> */}

                <Typography
                    as="li"
                    variant="small"
                >
                    <Link
                        to={'/'}
                        onClick={() => setOpenNav(false)}
                        className=" pt-[15px] pb-4 rounded-lg w-full inline-block font-normal hover:bg-lightBlue text-center text-[20px] !leading-[23.48px] text-primary hover:text-darkBlue transition-colors"
                    >
                        Главная
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                >
                    <Link
                        to={'/manager'}
                        onClick={() => setOpenNav(false)}
                        className=" pt-[15px] pb-4 rounded-lg w-full inline-block font-normal hover:bg-lightBlue text-center text-[20px] !leading-[23.48px] text-primary hover:text-darkBlue transition-colors"
                    >
                        Ваш менеджер
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                >
                    <Link
                        to={'/faq'}
                        onClick={() => setOpenNav(false)}
                        className=" pt-[15px] pb-4 rounded-lg w-full inline-block font-normal hover:bg-lightBlue text-center text-[20px] !leading-[23.48px] text-primary hover:text-darkBlue transition-colors"
                    >

                        Вопросы и ответы
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                >
                    <Link
                        to={'/contacts'}
                        onClick={() => setOpenNav(false)}
                        className=" pt-[15px] pb-4 rounded-lg w-full inline-block font-normal hover:bg-lightBlue text-center text-[20px] !leading-[23.48px] text-primary hover:text-darkBlue transition-colors"
                    >

                        Контакты
                    </Link>
                </Typography>
            </ul>
        </div>
    )
}

export default NavList
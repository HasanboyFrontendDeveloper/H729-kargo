import {
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const NavList = () => {
    return (
        <ul className="my-2 flex gap-[68px]  ">
        {/* <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"> */}
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-normal text-base "
            >
                <Link to={'/'} className="  hover:text-blue-500 transition-colors" >
                    Главная
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-normal text-base "
            >
                <Link to={'/manager'} className="  hover:text-blue-500 transition-colors" >
                    Ваш менеджер
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-normal text-base "
            >
                <Link to={'/faq'} className="  hover:text-blue-500 transition-colors" >

                    Вопросы и ответы
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-normal text-base "
            >
                <Link to={'/contacts'} className="  hover:text-blue-500 transition-colors" >

                    Контакты
                </Link>
            </Typography>
        </ul>
    )
}

export default NavList
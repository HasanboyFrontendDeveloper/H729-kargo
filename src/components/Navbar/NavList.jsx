import {
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={'/'} className="flex items-center hover:text-blue-500 transition-colors" >

                    Главная
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={'/manager'} className="flex items-center hover:text-blue-500 transition-colors" >
                    Ваш менеджер
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={'/faq'} className="flex items-center hover:text-blue-500 transition-colors" >

                    Вопросы и ответы
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={'/contacts'} className="flex items-center hover:text-blue-500 transition-colors" >

                    Контакты
                </Link>
            </Typography>
        </ul>
    )
}

export default NavList
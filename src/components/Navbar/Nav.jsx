import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/images/logo.png'
import NavList from "./NavList";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar className="mx-auto lg:max-w-[1276px] max-w-[280px] lg:pt-6  shadow-none p-0 ">
        <div className="flex items-center justify-between mt-[10px] lg:my-0 text-blue-gray-900">
          <Link to={'/'}>
            <img src={logo} alt="Logo" className="lg:w-[175px] w-[130px] " />
          </Link>

          <ul className="my-2 lg:flex gap-[68px] hidden ">
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
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(true)}
          >

            {/* <Bars3Icon className="h-9 w-10" strokeWidth={2} /> */}
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="3" fill="#203253" />
              <rect y="7" width="24" height="3" fill="#203253" />
              <rect y="14" width="24" height="3" fill="#203253" />
            </svg>
          </IconButton>
        </div>


      </Navbar>
      <NavList openNav={openNav} setOpenNav={setOpenNav} />
    </>

  );
}

export default Nav
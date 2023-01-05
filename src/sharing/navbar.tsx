import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import logo from "../assets/logo.jpg";

import {
  BrowserRouter as Router,
  Route,
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

export default function Navbarr() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const sncode = localStorage.getItem("sncode");

  const gotoback = (event: any) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to exit",
      text: "your ready ",
      confirmButtonText: "OK",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/"), localStorage.clear();
      }
    });
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row  lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href={`/Dashboard/${sncode}`}
          className="flex items-center p-2 duration-300  ease-out  hover:rounded-full hover:bg-blue-500 hover:text-white"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/report"
          className="flex items-center p-2 duration-300  ease-out  hover:rounded-full hover:bg-blue-500 hover:text-white"
        >
          Report
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/tagging"
          className="flex items-center p-2 duration-300  ease-out  hover:rounded-full hover:bg-blue-500 hover:text-white"
        >
          Tagging
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center p-2 duration-300  ease-out  hover:rounded-full hover:bg-blue-500 hover:text-white"
        >
          About AS
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="max-w-screen mx-auto border-none bg-slate-50 p-3 py-2 px-4  lg:px-8 lg:py-4 ">
      <div className="text-blue-gray-900 container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 w-20 cursor-pointer rounded-full  bg-blue-500 py-1.5  text-center  font-normal "
        >
          {/* <img src={logo} alt=""  className="w-[40px] h-[40px] rounded-full" /> */}
          <span className=" mt-1  text-center font-bold text-white ">
            Soiha
          </span>
        </Typography>

        <div className=" hidden lg:mt-2 lg:block">{navList}</div>
        <Button
          variant="gradient"
          onClick={gotoback}
          size="sm"
          className="hidden border-red-600 text-red-500 hover:border-red-600 hover:bg-red-600 hover:text-teal-50 lg:inline-block"
        >
          Leave
        </Button>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-5 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="ml-[-11px] mt-[-11px] h-6 w-5 text-black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                className="ml-[-11px] mt-[-11px] text-black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[-11px] mt-[-11px] h-6 w-5 text-center text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                className="ml-[-11px] mt-[-11px] text-black"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        {navList}
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          onClick={gotoback}
          className="mb-2  border-red-600 text-red-500 hover:border-red-600 hover:bg-red-600 hover:text-teal-50"
        >
          <span>Leave</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

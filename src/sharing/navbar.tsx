import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import logo from '../assets/logo.jpg'

import { BrowserRouter as Router, Route, useParams,useLocation ,useNavigate,NavLink,Link } from 'react-router-dom';
import { createHook } from "async_hooks";

export default function Navbarr() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const sncode = localStorage.getItem('sncode');

    
    const gotoback =(event:any) =>{
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure you want to exit',
        text: 'your ready ',
        confirmButtonText: 'OK',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((res) => { if(res.isConfirmed){navigate('/'), localStorage.clear(); }});

      
    }
    useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false)
        );
      }, []);

      const navList = (
        <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href={`/Dashboard/${sncode}`} className="ease-out duration-300 flex items-center  hover:bg-blue-500  hover:rounded-full hover:text-white p-2">
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal">

            <a href="/report" className="ease-out duration-300 flex items-center  hover:bg-blue-500  hover:rounded-full hover:text-white p-2">
              Report
            </a> 

          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="/tagging" className="ease-out duration-300 flex items-center  hover:bg-blue-500  hover:rounded-full hover:text-white p-2">
            Tagging
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="ease-out duration-300 flex items-center  hover:bg-blue-500  hover:rounded-full hover:text-white p-2">
              About AS
            </a>
          </Typography>
        </ul>
      );

      return (
        <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 p-3  bg-slate-50 border-none ">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="mr-4 cursor-pointer py-1.5 font-normal  w-20 text-center  bg-blue-500  rounded-full "
            >
              {/* <img src={logo} alt=""  className="w-[40px] h-[40px] rounded-full" /> */}
              <span className=" text-white  font-bold text-center mt-1 ">Soiha</span>
            </Typography>

            <div className=" hidden lg:block lg:mt-2">{navList}</div>
            <Button variant="gradient" onClick={gotoback} size="sm" className="hidden lg:inline-block hover:text-slate-50 hover:bg-red-600 hover:border-red-600 border-red-600">
              <span className=" text-red-600 hover:text-white">Leave</span>
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
                  className="h-6 w-5 ml-[-11px] mt-[-11px]"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    className="ml-[-11px] mt-[-11px]"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5 text-center ml-[-11px] mt-[-11px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    className="ml-[-11px] mt-[-11px]"
                  />
                </svg>
              )}
            </IconButton>
          </div>




          
        </Navbar>
      );
}


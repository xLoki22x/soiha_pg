import React, { Component, useEffect } from 'react'

import { BrowserRouter as Router, Route, useParams, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/wallpaperflare.com_wallpaper.jpg'
import Navbarr from '../sharing/navbar'
import imgback3 from '../assets/hpwa2.png'
import { FcOk } from "react-icons/fc";


export interface IInputWrapperProps {

    children: JSX.Element | JSX.Element[];
}

export const Dashboard = () => {
    const { id } = useParams()
    localStorage.setItem('sncode', id?.toUpperCase() || '');


    console.log(id?.toUpperCase());
    const today = new Date();
    const months = new Date(today.getFullYear(), today.getMonth() + 3);

    useEffect(() => {
        if (id == null || id == undefined) {
            alert('Please enter')
        }
    })
    let iconStyles = { color: "red", fontSize: "1.5em" };

    return (
        <div className='font-display'>
            <Navbarr></Navbarr>
            <div className='text-center h-[100hv] mt-[7%] '>
                <h1 className=' text-black '>SN : {id?.toUpperCase()}</h1>
                <div className="flex font-sans flex-auto col-auto items-center justify-center ">

                    <div className='overflow-hidden group'>
                        <img src={imgback3} className="  inset-2  lg:w-[350px] lg:h-[350px] sm:w-[300px] sm:h-[300px] object-cover rounded-lg  transition duration-300 group-hover:scale-110 " loading="lazy" />
                    </div>

                    <div className="  w-[600px] h-[300px] rounded-r-lg ">
                        <div className='flex justify-between'>
                            <div className='flex  justify-around items-center'>
                                <h3 className=' text-gray-800 text-left lg:text-2xl sm:text-lg ml-5 mt-5'> HIGH PRESSURE WASHER OLYMPUS  </h3>
                                <h3 className=' text-green-600 text-left lg:text-2xl sm:text-lg ml-5 mt-5'><FcOk /></h3>
                                {/* <p className='text-green-500 text-left ml-5 font-bold '> SN : {id?.toUpperCase()}</p> */}
                            </div>
                            <p className='text-green-500 mr-5 mt-6 font-bold text-[20px]'> Warranty</p>
                        </div>

                        <div className='mt-5'>
                            <p className='sm:text-sm lg:text-lg md:text-base mt-10 text-gray-800 text-left ml-5'>Suitable for household users Considering the nature of the use that is not very heavy and the scope of the area of use is not wide, such as home furniture Motorcycles, cars and floor cleaning, etc.</p>
                        </div>

                        <div className='mt-5 flex justify-between text-end'>

                            <div>
                                <p className='text-green-500 text-left ml-5 font-bold sm:text-sm lg:text-lg md:text-base'> Start Warranty
                                </p> <span className='text-black ml-5'>{new Date().toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}</span>
                            </div>

                            <div>
                                <p className='text-red-400  font-bold sm:text-sm lg:text-lg md:text-base'> End Warranty </p>
                                <span className='text-black '> {months.toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}</span>

                            </div>
                            {/* <p className='text-red-400 text-left mr-5 font-bold sm:text-sm lg:text-lg md:text-base'> End Warranty {months.toDateString()}</p> */}
                        </div>
                    </div>

                </div>
                {/* <div className='mt-10'>
            <button className=' bg-purple-500' onClick={()=>{navigate(-1)}}>back</button>
            <button className='ml-2 bg-red-400 text-slate-100   ' onClick={()=>{navigate(0)}}>Report</button>
            </div> */}
            </div>
        </div>

    )

}
export default Dashboard



import React from 'react'
import { Outlet, Link, Routes, Route, useNavigate, Navigate, Form } from "react-router-dom";
import Navbarr from '../sharing/navbar';
import imgback from '../assets/225.png'
import imgback2 from '../assets/123.png'
import imgback3 from '../assets/hpwa2.png'
import imgback4 from '../assets/plate.png'
import { Card, Progress } from '@material-tailwind/react';

const tagging = () => {

    const sncode = localStorage.getItem('sncode');
    return (
        <body>
            <Navbarr />
            <h1 className="text-4xl text-left ml-20 font-semibold mb-6 mt-10 text-black">Package status <span className='text-2xl text-slate-500 font-normal '>#{sncode}</span></h1>
            <div className='mb-10'>
                <div className='ml-20 mr-20 bg-white  text-slate-800 flex shadow-lg  grid-rows-4 rounded-t-3xl'>


                    {/* //img  */}
                    <div className='w-[250px]  h-[200px]'>
                        {/* <img src={imgback} className='w-[200px]  h-[200px] m-auto' /> */}
                        <img src={imgback3} className='w-[200px]  h-[200px] m-auto'></img>

                    </div>


                    {/* //detail Product */}
                    <div className='w-[380px]  h-[200px]'>
                        <p className='text-left mt-5 text-xl font-bold'>HIGH PRESSURE WASHER</p>
                        {/* <p className='text-left mt-3 text-xl'>Pey $25</p> */}
                        <p className='text-left mt-3 text-sm text-slate-500'> Suitable for household users Considering the nature of the use that is not very heavy and the scope of the area of use is not wide, such as home furniture Motorcycles, cars and floor cleaning, etc.</p>

                    </div>


                    {/* //detail Address */}
                    <div className='w-[250px] text-left ml-8 mt-5 h-[200px]'>
                        <label className='text-xl font-bold' >Address</label>
                        <p className='mt-2  text-sm'>tanpisit Jantarat</p>
                        <p className='text-sm'>22/11 pang lo nikom</p>
                        <p className='text-sm'> Maehonson</p>
                        <p className='text-sm'>58000 082-383-6077</p>
                    </div>


                    {/* //detail status */}
                    <div className='mr-5 my-auto w-[150px] text-center' >
                        <h2 className=' text-3xl'>Status</h2>
                        <p className=' text-3xl text-lime-400'>ซ่อม</p>
                    </div>
                </div>

                <div className='ml-20 mr-20 bg-white text-slate-800 flex rounded-b-3xl h-[150px]  border-t-2'>
                    <div className='flex-col'>
                        <div className='ml-10 mt-3 text-left'>
                            <p className=' font-bold'>Preparing tp ship on Mar 24,2022</p>
                        </div>

                        <div className="mt-5 mb-1 w-[1000px]   flex justify-between ml-20 mr-20">
                            {/* <p>Send for repair</p>
                      <p>Examine</p>
                      <p>Repair</p>
                      <p>Return Product</p>
                      <p>Successful delivery</p> */}
                            <p>เช็ค</p>
                            <p>ซ่อม</p>
                            <p>ส่ง</p>
                        </div>
                        <div className='w-[1000px]  ml-20 bg-slate-200 rounded-full h-2.5'>
                            <div className="bg-blue-600 h-2.5 w-[50%]  rounded-full" ></div>
                        </div>
                        <div className='mt-5'>
                        </div>
                    </div>
                </div>
            </div>



        </body>



    )
}

export default tagging
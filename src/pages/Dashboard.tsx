import React, { Component,useEffect } from 'react'
import { BrowserRouter as Router, Route, useParams,useLocation ,useNavigate     } from 'react-router-dom';
import img from '../assets/wallpaperflare.com_wallpaper.jpg'
import Navbarr from '../sharing/navbar'

export interface IInputWrapperProps  {
    children: JSX.Element|JSX.Element[];
  }

export const Dashboard =()=>{
    const navigate = useNavigate();
  const {id} = useParams()
  console.log(id);
  const today = new Date();
  const months = new Date(today.getFullYear(), today.getMonth()+3);

  console.log(today.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }));
  console.log(months.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }));
  
  return(
      <div>
        <Navbarr></Navbarr>
            <h1>Dashboard {id}</h1> 
            <div className="flex font-sans mt-10 flex-auto col-auto items-center ">
                <img src={img} className="  inset-2  w-[350px] h-[350px] object-cover rounded-lg" loading="lazy" />
                <div className=" bg-slate-100 w-[500px] h-[300px] ">
                    <div className='flex justify-between'>
                        <div className='flex-auto '>
                    <h3 className=' text-gray-800 text-left text-2xl ml-5 mt-5'>Name Product</h3>
                    <p className='text-green-500 text-left ml-5'> SN : {id}</p>
                        </div>
                    <p className='text-green-500 mr-5 mt-6'> Warranty</p>
                    </div>

                        <div className='mt-5'>
                            <p className='text-gray-800 text-left ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo quibusdam officia dicta eaque totam, reiciendis accusamus! Eaque quaerat quia facilis perferendis voluptate laborum beatae? Culpa autem eius ullam quaerat!</p>
                        </div>

                    <div className='mt-5 flex justify-between text-end'>
                    <p className='text-green-500 text-left ml-5'> start Warranty 12/25/2022 </p>
                    <p className='text-red-400 text-left mr-5'> end Warranty 02/25/2023</p>
                    </div>
                 
                </div>
            </div>
            <div className='mt-10'>
            <button className=' bg-purple-500' onClick={()=>{navigate(-1)}}>back</button>
            <button className='ml-2 bg-red-400 text-slate-100   ' onClick={()=>{navigate(0)}}>Report</button>
            </div>
       
        </div>
            
     ) 

    }
export default Dashboard



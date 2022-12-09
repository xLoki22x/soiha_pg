import React, { Component,useEffect } from 'react'
import { BrowserRouter as Router, Route, useParams,useLocation ,useNavigate     } from 'react-router-dom';
import img from '../assets/wallpaperflare.com_wallpaper.jpg'
import Navbarr from '../sharing/navbar'
// import Sidebar from '../sharing/sidebar';
import imgback3 from '../assets/hpwa2.png'
export interface IInputWrapperProps  {
    children: JSX.Element|JSX.Element[];
  }

export const Dashboard =()=>{
  const navigate = useNavigate();
  const {id} = useParams()
  localStorage.setItem('sncode',id?.toUpperCase() || '');
 
  
  console.log(id?.toUpperCase());
  const today = new Date();
  const months = new Date(today.getFullYear(), today.getMonth()+3);



  // console.log(today.toLocaleDateString('th-TH', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   weekday: 'long',
  // }));
  // console.log(months.toLocaleDateString('th-TH', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   weekday: 'long',
  // }));
  
  return(
      <div className=''>
          <Navbarr></Navbarr>
          <div className='text-center  m-auto  mt-10 '>
             <h1 className=' text-black'>SN : {id?.toUpperCase()}</h1> 
            <div className="flex font-sans mt-10 ml-[150px] flex-auto col-auto items-center  ">

                <div className='overflow-hidden group'>
                <img src={imgback3} className="  inset-2  w-[350px] h-[350px] object-cover rounded-lg  transition duration-300 group-hover:scale-110 sm:h-[450px] " loading="lazy" />
                </div>

                <div className="  w-[550px] h-[300px] rounded-r-lg ">
                    <div className='flex justify-between'>
                        <div className='flex-auto '>
                    <h3 className=' text-gray-800 text-left text-2xl ml-5 mt-5'>HIGH PRESSURE WASHER OLYMPUS</h3>
                    <p className='text-green-500 text-left ml-5 font-bold'> SN : {id?.toUpperCase()}</p>
                        </div>
                    <p className='text-green-500 mr-5 mt-6 font-bold text-[20px]'> Warranty</p>
                    </div>

                        <div className='mt-5'>
                            <p className='text-gray-800 text-left ml-5'>Suitable for household users Considering the nature of the use that is not very heavy and the scope of the area of use is not wide, such as home furniture Motorcycles, cars and floor cleaning, etc.</p>
                        </div>

                    <div className='mt-5 flex justify-between text-end'>
                    <p className='text-green-500 text-left ml-5 font-bold '> Start Warranty 12/25/2022 </p>
                    <p className='text-red-400 text-left mr-5 font-bold '> End Warranty 02/25/2023</p>
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



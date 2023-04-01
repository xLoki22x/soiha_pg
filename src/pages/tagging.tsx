import React, { Component, useState, useEffect, ChangeEvent } from 'react'
import Navbarr from '../sharing/navbar';
import imgback3 from '../assets/hpwa2.png'

const tagging = () => {

    const sncode = localStorage.getItem('sncode');
    const [barprogrssode, setbarprogrss] = useState(0);

    useEffect(() => {

        setbarprogrss(100)

    }, [])

    return (
        <body className='font-display'>
            <Navbarr />
            <h1 className="text-4xl text-left ml-20 font-semibold mb-6 mt-10 text-black">Package status <span className='text-2xl text-slate-500 font-normal '>#{sncode}</span></h1>
            <div className='mb-10'>
                <div className='ml-20 mr-20 bg-white  text-slate-800 flex shadow-lg  grid-rows-4 rounded-t-3xl'>


                    {/* //img  */}
                    <div className='w-[250px]  h-[200px] flex items-center'>
                        {/* <img src={imgback} className='w-[200px]  h-[200px] m-auto' /> */}
                        <img src={imgback3} className='lg:w-[200px]  lg:h-[200px]  sm:w-[100px] sm-w[100px]  lg:m-auto sm:m-auto'></img>

                    </div>


                    {/* //detail Product */}
                    <div className='w-[380px]  h-[200px]'>
                        <p className='text-left mt-5 lg:text-xl sm:text-sm font-bold'>HIGH PRESSURE WASHER</p>
                        {/* <p className='text-left mt-3 text-xl'>Pey $25</p> */}
                        <p className='text-left mt-3 lg:text-sm sm:text-xs text-slate-500' > Suitable for household users Considering the nature of the use that is not very heavy and the scope of the area of use is not wide, such as home furniture Motorcycles, cars and floor cleaning, etc.</p>

                    </div>


                    {/* //detail Address */}
                    <div className='w-[250px] text-left ml-8 mt-5 h-[200px]'>
                        <label className='lg:text-xl sm:text-sm font-bold  ' >Address</label>
                        <p className='mt-2  text-sm'>tanpisit Jantarat</p>
                        <p className='lg:text-sm sm:text-xs'>22/11 pang lo nikom</p>
                        <p className='lg:text-sm sm:text-xs'> Maehonson</p>
                        <p className='lg:text-sm sm:text-xs'>58000 082-383-6077</p>
                    </div>


                    {/* //detail status */}
                    <div className='mr-5 my-auto w-[150px] text-center' >
                        <h2 className=' text-3xl '>Status</h2>
                        {(() => {
                            if (barprogrssode == 0) {
                                return (
                                    <p className=' text-3xl text-lime-400'>เช็ค</p>
                                )
                            } else if (barprogrssode == 50) {
                                return (
                                    <p className=' text-3xl text-lime-400'>ซ่อม</p>
                                )
                            } else if (barprogrssode == 100) {
                                return (

                                    <p className=' text-3xl text-lime-400'>ส่งสินค้า</p>
                                )
                            }
                        })()}

                    </div>
                </div>

                <div className='ml-20 mr-20 bg-white text-slate-800 flex rounded-b-3xl h-[150px]  border-t-2'>
                    <div className='w-[100%]'>
                        <div className='ml-10 mr-10 mt-3 text-left'>
                            <p className=' font-bold'>Preparing tp ship on {new Date().toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })} </p>
                        </div>
                        <div className='ml-10 mr-10'>
                            <div className="mt-5 mb-1 lg:w-[100%] sm:w-[100%]  flex justify-between ">
                                {/* <p>Send for repair</p>
                      <p>Examine</p>
                      <p>Repair</p>
                      <p>Return Product</p>
                      <p>Successful delivery</p> */}

                                <p >เช็ค</p>
                                <p>ซ่อม</p>
                                <p>ส่งสินค้า</p>
                            </div>

                            <div className='lg:w-[100%] sm:w-[100%]   bg-slate-200 rounded-full h-2.5'>

                                {(() => {
                                    if (barprogrssode == 0) {
                                        return (
                                            <div className="bg-blue-600 h-2.5 w-[2%] rounded-full" ></div>
                                        )
                                    } else if (barprogrssode == 50) {
                                        return (
                                            <div className="bg-blue-600 h-2.5 w-[50%] rounded-full" ></div>
                                        )
                                    } else if (barprogrssode == 100) {
                                        return (
                                            <div className="bg-blue-600 h-2.5 w-[100%] rounded-full" ></div>
                                        )
                                    }
                                })()}


                            </div>
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
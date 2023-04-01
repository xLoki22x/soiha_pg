
import PropTypes from 'prop-types'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/TextField';
import Navbarr from '../sharing/navbar'
import '../css/home.css'
import { Outlet, Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import check from '../assets/check.png'



const successorder = () => {

  const sncode = localStorage.getItem('sncode');
  let navigate = useNavigate();

  function handleClick() {
    Swal.fire({
      icon: 'warning',
      title: 'Back to Dashboard',
      text: 'Are you sure you want to navigate to the dashboard',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'i am sure',
      cancelButtonText: 'cancel'
    }).then((res)=>{
      if(res.isConfirmed){
        return navigate(`/Dashboard/${sncode}`)
      }
    })
  }

  return (
    <div className="App w-full h-full font-thai flex m-0 place-items-center min-w-[320px] flex-col justify-center  min-h-screen" >
     
      <div className='mt-10'>
        <img src={check}  className='w-[200px] h-[200px] animate__animated animate__flipInX ' />
      </div>
      <div className=''>
        <h1 className=' text-black  '> Success Order</h1>
        <h3 className=' text-black  text-[19px] '> Payment in order </h3>
        <div className='flex flex-col'>

          <div className='w-full mt-5'>
         <div className="order-success__meta text-black">
                <ul className="order-success__meta-list flex  text-sm text-gray-500 justify-between text-center">

                    <li className=" border-r-2  border-indigo-500 border-dashed w-36 sm:w-auto ml-5 mr-5 ">
                        <span className="order-success__meta-title mr-4 ">Order number:</span><br/>
                        <span className="order-success__meta-value leading-4 "># {sncode}</span>
                    </li>


                    <li className=" border-r-2 border-indigo-500 border-dashed w-36 mr-5">
                        <span className="order-success__meta-title mr-5">Created at:</span><br/>
                        <span className="order-success__meta-value mr-5">{new Date().toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}</span>
                    </li>

                    <li className=" border-r-2 border-indigo-500 border-dashed w-36 mr-5">
                        <span className="order-success__meta-title mr-5">Total:</span><br/>
                        <span className="order-success__meta-value mr-5">1850</span>
                    </li>

                    <li className="w-36 mr-5">
                        <span className="order-success__meta-title mr-5 ">ช่องทางการชำระ:</span><br/>
                        <span className="order-success__meta-value mr-5">โอน</span>
                    </li>
                 
                </ul>
            </div>
            {/* <p className=' text-black mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque libero at laudantium quaerat mollitia, nesciunt ab facere tenetur? Nisi vel nam voluptatibus totam earum ut dolorem eaque dignissimos molestias accusamus?</p> */}
            <table className="min-w-full  mt-5 ">
          <thead className=" border-gray-400 border ">
            
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Product
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
               QTY
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                Total
              </th>
            </tr>

          </thead>

          <tbody className='border-gray-400 border '>
            <tr className="border-b">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                Mark
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                1
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                1500฿
              </td>
            </tr>
          </tbody>

          <tbody className='border-gray-400 border '>
            <tr className="border-b">
              <td rowSpan={2} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
              Subtotal
              </td>
              <td></td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                1500฿
              </td>
            </tr>
          </tbody>

          <tbody className='border-gray-400 border '>
            <tr className="">
              <td className=" text-gray-900 font-light px-6 py-4 text-lg whitespace-nowrap text-left">
                Total
              </td>
              <td ></td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                1500฿
              </td>
            </tr>
          </tbody>



        </table>
          </div>

          <div className='pt-5 pb-5'>
            <button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-50 transition ease-in hover:scale-110 hover:text-violet-700 ml-3 btn btn-primary border-none  hover:border-solid hover:border-2 border-sky-500 ' onClick={handleClick}>Back </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default successorder





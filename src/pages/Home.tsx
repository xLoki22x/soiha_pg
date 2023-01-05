import React, { Component, useState, useEffect, ChangeEvent } from 'react'
import { Outlet, Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import 'animate.css';
import '../App.css'
import Swal from 'sweetalert2'
import '../css/home.css'
import ApiService from '../sharing/apiservice';
import TextField from '@mui/material/TextField';


const Home = () => {

    let navigate = useNavigate();
    const [sncode, setSNcode] = useState('');

    const getsncode = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;
        const re = /^[A-Za-z0-9]+$/;
        if (value === "" || re.test(value)) {

            setSNcode(e.target.value);
            console.log(sncode);
            
        }
    }

    function handleClick() {
        if (sncode == '' || !sncode == undefined) {
            Swal.fire({
                icon: 'error',
                title: 'please enter SNcode',
                text: 'Please enter your SNcode!!!',
                confirmButtonText: 'OK',
            })
        } else {
            console.log('pass');
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure SNcode is true',
                text: 'Are you sure you want to continue?',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                confirmButtonText: 'i am sure',
                cancelButtonText: 'cancel'
            }).then((res) => {
                if (res.isConfirmed) {
                    return navigate(`Dashboard/${sncode}`)
                }
            })
        }
    }


    return (
        <div className="App w-full h-full  flex m-0 place-items-center min-w-[320px]  justify-center  min-h-screen" >
            <div className='animate__animated animate__bounce '>
                <h1 className='text-violet-700  '> SOIHA WARRANTY </h1>
                <div className='flex' >
                    <div>
                    <input style={{ textTransform: "uppercase" }} className='rounded-full ml-20 focus:outline-none bg-white text-black shadow-xl mt-5 w-96 h-12 text-center' placeholder='Enter Code Warranty' onChange={getsncode} type={'text'} value={sncode} ></input>
                    </div>
                    <div className='pt-5'>
                    <button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-100 hover:text-violet-700 ml-3 btn btn-primary' onClick={handleClick}>submit</button>
                    {/* <button className='ml-3' onClick={()=>handleClick()}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Enter</span>
                    </button> */}
                    </div>
                    {/* <Link to={`Dashboard/${sncode}`} ><button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-100 hover:text-violet-700 ml-3 btn btn-primary'>submit</button></Link> */}
                </div>
               <p className='mt-2' >  <Link to='register'className=' text-slate-400 mt-3 underline hover:text-black'> Register Guarantee</Link></p>
            </div>
            <Outlet />
        </div>
    )
};

export default Home;



import React, { Component, useState, useEffect ,ChangeEvent } from 'react'
import { Outlet, Link,  Routes,Route,useNavigate,Navigate   } from "react-router-dom";
import 'animate.css';
import '../App.css'
import Swal from 'sweetalert2'
import '../css/home.css'
import TextField from '@mui/material/TextField';


const Home =() =>{

    let navigate = useNavigate();
    const [sncode, setSNcode] = useState('');
  
    const getsncode = (e: React.ChangeEvent<HTMLInputElement>)=> {
          setSNcode(e.target.value);
          console.log(sncode);
        }

        function handleClick(){
            if(sncode == '' || !sncode==undefined){
                Swal.fire({
                    icon: 'error',
                    title: 'please enter SNcode',
                    text: 'Please enter your SNcode!!!',
                    confirmButtonText: 'OK',
                  })
            }else{
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
                    if(res.isConfirmed){
                        return navigate(`Dashboard/${sncode}`)
                    }
                  })
            }
        }



    return (
                    <div className="App w-full h-full  flex m-0 place-items-center min-w-[320px]  justify-center  min-h-screen" >
                        <div className='animate__animated animate__bounce '>
                            <h1 className='text-black'> Soiha Warranty </h1>
                            <div>
                                <input style={{ textTransform: "uppercase" }} className='rounded-full ml-20 focus:outline-none bg-white text-black shadow-xl mt-5 w-96 h-12 text-center' placeholder='Enter Code Warranty' value={sncode} onChange={getsncode} type={'text'}  ></input>
                                <button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-100 hover:text-violet-700 ml-3 btn btn-primary' onClick={handleClick}>submit</button>
                                {/* <Link to={`Dashboard/${sncode}`} ><button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-100 hover:text-violet-700 ml-3 btn btn-primary'>submit</button></Link> */}
                            </div>
                            <Link to='register'> <p className=' text-slate-400 mt-3 underline hover:text-black  '  > set guarantee</p></Link>
                        </div>
                        <Outlet />
                    </div>
                )
};

export default Home;



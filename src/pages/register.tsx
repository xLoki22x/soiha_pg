
import React, { Component, useState, useEffect ,ChangeEvent } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../App.css'
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { BrowserRouter as Router, Route, useParams, useLocation, useNavigate, NavLink, Link, Form } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function register() {

    const [sncode, setSNcode] = useState('');
    const navigate = useNavigate();


const  gotohome =()=>{
    if(sncode == '' || sncode == undefined){
        Swal.fire('error','กรุณาใส่ Sncode','error')
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure Register Warranty ',
            confirmButtonText: 'Yes ',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((res) => { if(res.isConfirmed){navigate(`/Dashboard/${sncode}`)}});
    }
}

    return (
        <div className=''>
            <div className='p-10  bg-white shadow-xl  w-[1000px]  sm:w-auto lg:w-auto rounded-lg  'style={{ margin: '0px auto' }}>
                <div className='w-[900px]  text-black' style={{ margin: '0 auto' }}>

                    <Typography variant="h6" gutterBottom className='lg:mt-5  lg:mb-5 lg:text-[30px] sm:text-3xl  sm:m-0  font-bold'>
                        Register Warranty
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="SNcode"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                                onChange={(e) => { setSNcode(e.target.value) }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="address"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           
                        </Grid>
                    </Grid>
                   
                </div>

                <div className="flex items-center justify-center ">

                     <button onClick={ ()=>{gotohome()} } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        OK
                    </button>

                    <Link to='/'> <button className="bg-red-700 hover:bg-red-800 ml-3 no-underline text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  >
                        Back
                    </button></Link>
                </div>
            </div>
            </div>
    )
}

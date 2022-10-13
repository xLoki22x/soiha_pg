import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import 'animate.css';
import '../App.css'
import {
    Routes,
    Route,
} from "react-router-dom";
export class Home extends Component {


    constructor(props: any) {
        super(props);
        this.state = { text: "" };
    }

    onclick() {

    }


    id: any = 1
    render() {
        return (
            <div className="App w-full h-full " >
                <div className='animate__animated animate__bounce '>
                    <h1> Soiha Warranty </h1>
                    <div>
                        <input className='rounded-full ml-20 focus:outline-none mt-5 w-96 h-12 text-center hover:shadow-lg' placeholder='Enter Code Warranty' type={'text'} ></input>
                        <Link to={`Dashboard/${1}`} ><button type='submit' className='bg-violet-700 text-slate-100 hover:bg-slate-100 hover:text-violet-700 ml-3 btn btn-primary'>submit</button></Link>
                    </div>
                    <Link to='/register'> <p className=' text-slate-400 mt-3 underline hover:text-lime-50  '  > set guarantee</p></Link>
                </div>
                <Outlet />
            </div>
        )
    }
}

export default Home
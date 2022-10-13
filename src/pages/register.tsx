import React, { Component } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
export class register extends Component {
    render() {
        return (

            <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left" >
                    <h3 className='text-gray-700 text-center ' >Register Warranty</h3>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow  appearance-none border rounded w-96 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Code Product
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="123456789" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Address
                        </label>
                        <textarea className="block  text-white  w-full h-20 text-sm font-bold mb-2" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Phone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="xxx-xxx-xxxx" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Date Buy
                        </label>
                        <input type={'date'} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            File Slip
                        </label>
                        <input type={'file'} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>


                    <div className="flex items-center justify-start">

                        <NavLink to={`Dashboard/${1}`}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            OK
                        </button></NavLink>

                        <Link to='/'> <button className="bg-red-700 hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  >
                            Back
                        </button></Link>
                    </div>
                </form>

            </div>


        )
    }
}

export default register
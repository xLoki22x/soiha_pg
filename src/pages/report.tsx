import PropTypes from 'prop-types'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Navbarr from '../sharing/navbar'
import { Card, Progress } from '@material-tailwind/react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Outlet, Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));



const report = () => {
  const [age, setAge] = React.useState('');
  let navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  const submit = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'Are you sure you want to continue?',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'i am sure',
      cancelButtonText: 'cancel'
    }).then((res) => {
      if (res.isConfirmed) {
        return navigate('/successorder');
      }
    })
  }


  return (
    <div className='font-display'>
      <Navbarr></Navbarr>

      <div className='mt-5 ml-20 mr-20 mb-20 '>
        <h1 className='text-left text-black'> Report</h1>

        <div className='flex lg:justify-around sm:flex sm:flex-col lg:flex-row'>
          <Card className='mt-5 lg:w-[650px] h-full  sm:w-auto shadow-2xl'>

            <div className='m-10 mb-[50px] '>
              <label className=' font-bold text-2xl text-black '>Address Details</label>

              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '250px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <TextField id="standard-basic" label="Name" variant="standard" />
                  <TextField id="standard-basic" label="Lastname" variant="standard" />
                </div>
              </Box>

              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '515px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <TextField id="standard-basic" label="Addess" variant="standard" />
                </div>
              </Box>

              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '515px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 515 }}>
                    <InputLabel id="demo-simple-select-label">Province</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      label="Province"
                      onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>

              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '250px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-label">Amphoe</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      label="Amphoe"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-label">Tambon</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      label="Tambon"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>


              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '515px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <TextField id="standard-basic" label="Postcode" variant="standard" />
                </div>
              </Box>

              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '515px', lineHeight: '29xp' }, }} noValidate autoComplete="off">
                <div className="">
                  <TextField id="standard-basic" label="Phone Number" variant="standard" />
                </div>
              </Box>



            </div>
          </Card>


          <Card className='mt-5 lg:w-[450px] sm:w-auto text-black shadow-2xl'>
            <div className='m-5 '>
              <label className=' font-bold text-2xl'>Your Order</label>

              <div className='flex mt-2 justify-between w-full lg:w-[300px] sm:w-[400px] '>
                <h3 className=' text-red-500 ml-3 mr-3 text-[15px] ' style={{ fontWeight: 'bold' }}>Technical</h3>
                <div className='w-[250px] text-left'>
                  <p>มีอาการ เสียที่หม้อแปลง และฝาครอบไหม้เลยจำเป็นต้องเปลื่ยน</p>
                </div>
              </div>

              <div className='mt-2'>
                <table className='w-[300px] text-center ' style={{ margin: '0 auto', fontSize: 15 }}>
                  <thead className='border-b-2  border-slate-700'>
                    <tr className=' flex justify-between text-center'>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody className='border-b-2  border-slate-700'>
                    <tr className='flex mt-2  justify-between text-center'>
                      <td>หม้อแปลง</td>
                      <td>1500 ฿</td>
                    </tr>

                    <tr className='flex mt-2 justify-between text-center'>
                      <td>น็อต</td>
                      <td>20 ฿</td>
                    </tr>

                    <tr className='flex mt-2 justify-between text-center'>
                      <td>ฝาครอบ</td>
                      <td>70 ฿</td>
                    </tr>

                  </tbody>

                  <thead className='border-b-2  border-slate-700 '>
                    <tr className='flex mt-2 mb-2 justify-between text-center'>
                      <th>Subtotal</th>
                      <th>1590 ฿</th>
                    </tr>
                  </thead>

                  <thead >
                    <tr className='flex mt-2  justify-between text-center text-[25px]'>
                      <th>Total</th>
                      <th>1590 ฿</th>
                    </tr>
                  </thead>
                </table>
              </div>


            </div>

            <div className='w-[300px] ' style={{ margin: '20px auto' }}>
              <ColorButton className='w-[250px] h-[60px] mt-5 ' onClick={() => submit()} variant="contained">Place Order</ColorButton>
            </div>
          </Card>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default report
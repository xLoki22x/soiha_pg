import PropTypes from 'prop-types'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/TextField';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbarr from '../sharing/navbar'
import { Card, Progress } from '@material-tailwind/react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <Navbarr></Navbarr>

      <div className='mt-5 ml-20 mr-20 mb-20'>
        <h1 className='text-left text-black'> Report</h1>

        <div className='flex justify-between'>
          <Card className='mt-5 w-[650px] h-full '>

            <div className='m-5 '>
              <label className=' font-bold text-3xl text-black'>Address Details</label>

              <div className='m-5 flex justify-between'>
                <TextField label="Fiest Name" className='w-[300px]' id="outlined-size-small" size="small" />
                <TextField label="Last name" className='w-[350px]' id="outlined-size-small" size="small" />
              </div>


              <div className='m-5 flex justify-between'>
                <TextField className='w-full' label="Email" id="outlined-size-small" size="small" />
              </div>

              <div className='m-5 flex justify-between'>
                <TextField className='w-full' label="Address" id="outlined-size-small" size="small" />
              </div>


              <div className='m-5 flex justify-between'>
                <TextField label="Road" id="outlined-size-small" size="small" className='w-full'  />
              </div>

              <div className='m-5 flex justify-between'>
                <FormControl className='w-full' size="small">
                  <InputLabel id="demo-simple-select-label">Town/City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Town/City"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className='m-5 flex justify-between'>

                <FormControl sx={{ minWidth: 200 }} size="small" className='w-full' >
                  <InputLabel id="demo-simple-select-label">County</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200 }} size="small" className='w-full' >
                  <InputLabel id="demo-simple-select-label">County</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='m-5 flex justify-between'>
                <TextField label="Zipcode/Postal" id="outlined-size-small" size="small" className='w-full' />
              </div>
            </div>
          </Card>


          <Card className='mt-5 w-[450px] text-black '>
            <div className='m-5 '>
              <label className=' font-bold text-3xl'>Your Order</label>

              <div className='flex mt-2 justify-between w-[300px] '>
                <p className=' text-red-500 ml-3 mr-3'>Technical</p>
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
                    <tr className='flex mt-2  justify-between text-center text-[30px]'>
                      <th>Total</th>
                      <th>1590 ฿</th>
                    </tr>
                  </thead>
                </table>
              </div>

            </div>

              <div className='w-[300px] ' style={{ margin: '20px auto' }}>
                  <ColorButton className='w-[250px] h-[60px] mt-5 '  variant="contained">Place Order</ColorButton>
              </div>
          </Card>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default report
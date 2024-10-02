import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux'


function Money() {

  const totalmoney = useSelector(state => state.money.value)

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgb(90 145 16), rgb(5 42 2))',
          height: '60px ',
          borderRadius: '15px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'20px'
        }}
      >
        <Typography
        sx={{ fontSize:'40px' }}
        >
        ${totalmoney} $
        </Typography>
      </Box>
    </>
  )
}

export default Money

import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Money() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgb(90 145 16), rgb(5 42 2))',
          height: '60px ',
          borderRadius: '15px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Typography
        sx={{ fontSize:'40px' }}
        >
        100,000,000,000 $
        </Typography>
      </Box>
    </div>
  )
}

export default Money

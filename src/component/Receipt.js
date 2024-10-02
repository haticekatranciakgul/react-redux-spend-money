import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';
import { selectItems, selectValue } from '../../src/redux/Money/MoneySlice';


function Receipt() {

  const items = useSelector(selectItems);
  const value = useSelector(selectValue);

  return (
    <>


      <Card sx={{
        backgroundColor: '#7f7f7f24',
        marginTop: '30px',
        marginBottom: '30px',
        padding: '10px',
        maxWidth: '500px',
        marginX: 'auto',
        borderRadius: '15px'
      }}>
        <Typography sx={{ fontSize: '30px' }}>Your Receipt</Typography>

        {items.map((item, index) => (

          <Grid container key={index} spacing={2}>
            <Grid size={4}>
              <Typography gutterBottom variant="h4" component="div" textAlign={'left'}>
                Product name: {item.title}
              </Typography>
            </Grid>
            <Grid size={4}>
              <Typography gutterBottom variant="h4" component="div">
                x {item.amount}
              </Typography>
            </Grid>
            <Grid size={4}>
              <Typography gutterBottom variant="h4" component="div" textAlign={'right'}>
                ${item.amount * item.price}
              </Typography>
            </Grid>
          </Grid>

        ))}



        <Divider></Divider>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div" textAlign={'left'} >
              Total:
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div">

            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div" textAlign={'right'}>
              {value} $
            </Typography>
          </Grid>
        </Grid>
      </Card>

    </>
  )
}

export default Receipt

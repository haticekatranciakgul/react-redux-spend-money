import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';


function Receipt() {
  return (
    <div>
      <Card sx={{ 
        backgroundColor: '#7f7f7f24', 
        marginTop: '30px', 
        marginBottom: '30px', 
        padding: '10px', 
        maxWidth: '500px', 
        marginX: 'auto' ,
        borderRadius: '15px'
        }}>
        <Typography sx={{ fontSize: '30px' }}>Your Receipt</Typography>

        <Grid container spacing={2}>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div" textAlign={'left'}>
              Product name
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div">
              x2
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography gutterBottom variant="h4" component="div" textAlign={'right'}>
              3 $
            </Typography>
          </Grid>
        </Grid>

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
              1000 $
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Receipt

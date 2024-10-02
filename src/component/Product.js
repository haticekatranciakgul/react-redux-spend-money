import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { TextField } from '@mui/material';

function Product() {
  return (
      <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
        <CardMedia
          sx={{ height: 100 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product name
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:'30px' }}>
            $ 100 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="large" color='white'><RemoveIcon/></Button>
          <TextField id="outlined-basic" value={0}
          type="number" variant="outlined" pattern="\d*"/>
          <Button size="large" color='white'><AddIcon/></Button>
        </CardActions>
      </Card>
   
  )
}

export default Product

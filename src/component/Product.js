import React from 'react'

import { data } from '../Data/data'
import Grid from '@mui/material/Grid2';


import ProductCard from './ProductCard';

function Product() {

  return (
    <>
      <Grid container spacing={2}>

        {
          data.map((item) =>
            <Grid size={4} key={item.id} >
              <ProductCard item={item} ></ProductCard>
            </Grid>
          )
        }

      </Grid>
    </>

  )
}

export default Product



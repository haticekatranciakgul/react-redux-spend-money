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
            <Grid size={4}>
              <ProductCard key={item.id} item={item} ></ProductCard>
            </Grid>
          )
        }

      </Grid>
    </>

  )
}

export default Product



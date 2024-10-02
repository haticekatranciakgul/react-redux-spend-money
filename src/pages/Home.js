import React from 'react'
import Navbar from '../component/Navbar'
import Money from '../component/Money'
import Product from '../component/Product'
import Receipt from '../component/Receipt'
import { Container } from '@mui/material'


function Home() {

    return (
        <div>
            <Navbar />
            <Container maxWidth='md'>
                <Money />
                <Receipt />
                <Product />
                
            </Container>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from '../component/Navbar'
import Money from '../component/Money'
import Product from '../component/Product'
import Receipt from '../component/Receipt'
import { Container } from '@mui/material'
import Footer from '../component/Footer'


function Home() {

    return (
        <div className="App">
            <Navbar />
            <Container maxWidth='md'>
                <Money />
                <Receipt />
                <Product />
            </Container>
            <Footer/>
        </div>
    )
}

export default Home

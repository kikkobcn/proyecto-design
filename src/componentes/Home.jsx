// import React from 'react'
import { Precios } from './Precios';
import { Footer } from './Footer';
import { Carousel } from "./Carousel";
import { Header } from "./Header";


export function Home() {
    return <div>
        <Header></Header>
        <Carousel></Carousel>
        <Precios></Precios>
        <Footer></Footer>
    </div>
    
}


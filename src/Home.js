import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'></div>
       <img className='home_image' src='https://knowtechie.com/wp-content/uploads/2020/07/amazon-prime-video-logo.jpg.webp' /> 
       <div className='home_row'>
            <Product 
            id = {1}
            title = "The Alchemist"
            price={15.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
             />
            
            <Product 
            id={2}
            title = "Complete Collection of Sherlock Holmes"
            price={30}
            image="https://images-na.ssl-images-amazon.com/images/I/81GRNatj7pL.jpg"
            rating={5}
            />

       </div>
       <div className='home_row'>
            <Product
            id={3}
            title = "Apple iPhone 13 (128GB) - Blue"
            price={800}
            image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
            rating={4} 
            />

            <Product
            id={4}
            title = "Dell Alienware x15 R1 Intel i7-11800H 15.6 inches Gaming Laptop, (32GB, 1TB SSD, NVIDIA RTX 3070 8GB, Alien FX)"
            price={3500}
            image="https://m.media-amazon.com/images/I/61KL3s4A8QL._SY450_.jpg"
            rating={5}
            />

            <Product
            id={5}
            title = "Bose Noise Cancelling 700 Bluetooth Wireless Over Ear Headphones with Mic for Clear Calls & Alexa Enabled and Touch Control, (Black)"
            price={400}
            image="https://m.media-amazon.com/images/I/61UzY7vPUIL._SL1200_.jpg"
            rating={4}
            />

       </div>
       <div className='home_row'>
            <Product 
            id={6}
            title = "Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
            price={900}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
            />

       </div>
    </div>
  )
}

export default Home; 
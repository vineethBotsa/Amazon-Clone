import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
// import './Subtotal'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


function Checkout() {

 const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>   
            <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/revisedT2/Header_PC_Teaser-2_English.jpg'></img>  

            <div>
                <h2 className='checkout_title'>Your shopping Basket</h2>   

                 {basket.map(item => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     key={item.uniqueId}
                  />
                 ))}
            </div>      
        </div>

        <div className='checkout_right'>
            <h2 className='checkout_total'>The Subtotal will go here</h2>
            <Subtotal/>
        </div>
    </div>
  );
}

export default Checkout;
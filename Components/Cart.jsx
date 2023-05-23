import React from 'react'
import { useCartContext } from '../ctx/cartContext';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios'

const Cart = () => {
    const { cartItems, removeCartItem } = useCartContext();
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const handleCheckout = async () => {
        debugger;
        const lineItems = cartItems.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name
                    },
                    unit_amount: item.price * 100 // stripe interprets price in cents
                },
                quantity: item.quantity
            }
        })

        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(lineItems),
        })

        // const { data } = await axios.post('http://localhost:3000/api/checkout', JSON.stringify({ lineItems }), {
        //     headers: {
        //         Accept: 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        // })

        const stripe = await stripePromise

        // await stripe.redirectToCheckout({ sessionId: data.id })
    }

    return (
        <div className='min-w-[275px] h-full px-3 py-6 bg-white text-[#333] rounded-lg shadow-lg cursor-pointer'>
            <div>
                <h2 className='text-center text-2xl'>Cart Items</h2>
                <div className='max-h-[225px] overflow-auto flex flex-col gap-8 my-8'>
                    {
                        cartItems?.length > 0 ? (
                            cartItems?.map((item) => (
                                <div key={item._id} className='flex items-center gap-8'>
                                    <div>
                                        <Image width='75' height='75' src={item.image} />
                                    </div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <span>{item.quantity} X {item.price}</span>
                                    </div>
                                    <AiOutlineClose size={20} onClick={() => removeCartItem(item)} />
                                </div>
                            ))
                        )
                            : <span className='text-red-500 ml-2'>Cart is Empty</span>
                    }
                </div>
                <span className='inline-block'>Total: <span>${cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}</span></span>
                <span className='block max-w-max mt-8 px-6 py-1 bg-orange-500 text-[#efefef] rounded-lg' onClick={handleCheckout}>Checkout</span>
            </div>
        </div>
    )
}

export default Cart;
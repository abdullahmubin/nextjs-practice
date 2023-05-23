// import Stripe from 'stripe'
import axios from 'axios'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    console.log('handler test');
    debugger;
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.line_items,
                mode: 'payment',
                payment_method_types: ['card'],
                success_url: 'http://localhost:3000',
                cancel_url: 'http://localhost:3000'
            })

            return res.status(201).json(session)
        }
        catch (error) {
            return res.status(500).json(error.response)
        }
    }
}
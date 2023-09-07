import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIP_SECRET_KEY ?? '',
    {
        
        apiVersion: "2023-08-16",
        appInfo: {
            name: 'spotify clone',
            version: '0.1.0'
        }
    }
);
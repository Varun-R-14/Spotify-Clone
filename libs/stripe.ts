import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIP_SECRET_KEY ?? '',
    {
        //@ts-ignore
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'spotify clone',
            version: '0.1.0'
        }
    }
);
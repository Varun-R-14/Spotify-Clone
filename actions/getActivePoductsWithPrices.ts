import { ProductWithPrice } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getActivePoductsWithPrices = async (): Promise<ProductWithPrice[]> =>{
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('products')
    .select('*,prices{*)')
    .eq('active',true)
    .eq('prices.active', true)
    .order('medadata->indes')
    .order('created_at', { ascending: false})

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getActivePoductsWithPrices;
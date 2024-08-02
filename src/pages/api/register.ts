// With `output: 'hybrid'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const formData = await request.formData();
        const req = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            region: formData.get("region"),
            service: formData.get("service"),
            description: formData.get("description"),
            social: {
                instagram: formData.get("instagram"),
                telegram: formData.get("telegram"),
                whatsapp: formData.get("whatsapp"),
            }
        }
        const {error} = await supabase.from("Contact_queue").insert(req)
        if (error)
        {
            console.log(error)
            return new Response(JSON.stringify({message: error.message, status: 400}))
        }
        return redirect("/success")
    }  catch (error: any) {
        return new Response(JSON.stringify({message: error.message, status: 500}))
    }
};
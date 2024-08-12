import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const {data} = await supabase.auth.getSession()
        if (!data?.session?.user)
            return new Response(JSON.stringify({message: "forbidden", status: 403}))
        const formData = await request.formData();
        const req = {
            name: formData.get("name"),
            url: formData.get("url"),
            picture: formData.get("picture"),
            description: formData.get("description"),
            type: formData.get("type"),
            created_by: data.session.user?.email
        }
        const {error} = await supabase.from("Donation").insert(req)
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

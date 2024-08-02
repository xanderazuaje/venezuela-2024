import type {APIRoute} from "astro";
import {supabase} from "@/lib/supabase.ts";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const {id, name, email, service, region, phone, description, social} = await request.json();
        const {data} = await supabase.auth.getSession()
        const {error: errorAdd} = await supabase
            .from("Contact")
            .insert({
                name,
                email,
                service,
                region,
                phone,
                description,
                social,
                created_by: data.session?.user})
        if (errorAdd)
            return new Response(JSON.stringify({message: errorAdd.message, status: 500}))
        const {error: errorDel} = await supabase.from("Contact_queue").delete().eq("id", id)
        if (errorDel)
            return new Response(JSON.stringify({message: errorDel.message, status: 400}))
        return redirect("/dashboard");
    }
    catch (error: any) {
        return new Response(JSON.stringify({message: error.message, status: 500}))
    }
};

import type {APIRoute} from "astro";
import {supabase} from "@/lib/supabase.ts";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const {data} = await supabase.auth.getSession()
        if (!data?.session?.user)
            return new Response(JSON.stringify({message: "forbidden", status: 403}))
        const {id} = await request.json();
        const {error: errorDel} = await supabase.from("Contact_queue").delete().eq("id", id)
        if (errorDel)
            return new Response(JSON.stringify({message: errorDel.message, status: 400}))
        return redirect("/dashboard");
    }
    catch (error: any) {
        return new Response(JSON.stringify({message: error.message, status: 500}))
    }
};

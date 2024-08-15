import type {APIRoute} from "astro";
import {supabase} from "@/lib/supabase.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const {data} = await supabase.auth.getSession()
        if (!data?.session?.user)
            return new Response(JSON.stringify({message: "forbidden", status: 403}))
        const {id, name, email, service, region, phone, description, social} = await request.json();
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
                created_by: data.session.user?.email})
        if (errorAdd)
            return new Response(JSON.stringify({message: errorAdd.message, status: 500}))
        const {error: errorDel} = await supabase.from("Contact_queue").delete().eq("id", id)
        if (errorDel)
            return new Response(JSON.stringify({message: errorDel.message, status: 400}))
        return redirect("/dashboard");
    }
    catch (error: unknown) {
        return new Response(JSON.stringify({message: (error as Error).message, status: 500}))
    }
};

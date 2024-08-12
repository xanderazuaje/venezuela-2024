import type {APIRoute} from "astro";
import {supabase} from "@/lib/supabase";
import sharp from "sharp";

const bucketName = import.meta.env.SUPABASE_DONATIONS_BUCKET

async function imgToWebp(imageFile: Blob): Promise<Buffer> {
    try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        return await sharp(buffer)
            .webp({quality: 80})
            .resize({
                width: 300,
                height: 300,
            })
            .toBuffer();
    } catch (error) {
        throw new Error('Failed to convert image to WebP format');
    }
}

function uuidv4(): string {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

async function uploadImage(imageFile: Blob) {
    const webpImg = await imgToWebp(imageFile);
    const path = `public/${uuidv4()}.webp`;
    const { data, error } = await supabase
        .storage
        .from(bucketName)
        .upload(path, webpImg, {
            contentType: 'image/webp',
        });

    if (error) {
        throw new Error(`Error uploading file: ${error.message}`);
    }

    const { data: { publicUrl } } = supabase
        .storage
        .from(bucketName)
        .getPublicUrl(data?.path);

    return publicUrl;
}

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const {data} = await supabase.auth.getSession()
        if (!data?.session?.user)
            return new Response(JSON.stringify({message: "forbidden", status: 403}))
        const formData = await request.formData();
        const img = formData.get('picture') as File
        const req = {
            name: formData.get("name"),
            url: formData.get("url"),
            picture: img ? await uploadImage(img) : null,
            description: formData.get("description"),
            type: formData.get("type"),
            created_by: data.session.user?.email
        }
        const {error} = await supabase.from("Donation").insert(req)
        if (error)
            return new Response(JSON.stringify({message: error.message, status: 400}))
        return redirect("/success")
    }  catch (error: any) {
        return new Response(JSON.stringify({message: error.message, status: 500}))
    }
};

import {imgToWebp} from "@/utils/imgToWebp.ts";
import {uuidv4} from "@/utils/uuidv4.ts";
import {supabase} from "@/lib/supabase.ts";
import {SUPABASE_DONATIONS_BUCKET} from "@/config";

export async function uploadImage(imageFile: Blob) {
    const webpImg = await imgToWebp(imageFile);
    const path = `public/${uuidv4()}.webp`;
    const {data, error} = await supabase
        .storage
        .from(SUPABASE_DONATIONS_BUCKET)
        .upload(path, webpImg, {
            contentType: 'image/webp',
        });

    if (error) {
        throw new Error(`Error uploading file: ${error.message}`);
    }

    const {data: {publicUrl}} = supabase
        .storage
        .from(SUPABASE_DONATIONS_BUCKET)
        .getPublicUrl(data?.path);

    return publicUrl;
}
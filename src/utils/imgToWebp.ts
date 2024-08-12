import sharp from "sharp";

export async function imgToWebp(imageFile: Blob): Promise<Buffer> {
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
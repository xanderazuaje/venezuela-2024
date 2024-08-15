import sharp from "sharp";

export async function imgToWebp(imageFile: Blob): Promise<Buffer> {
    try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        return await sharp(buffer)
            .webp({quality: 80})
            .resize({
                width: 200,
                height: 200,
            })
            .toBuffer();
    } catch (error: unknown) {
        console.error((error as Error).message);
        throw new Error('Failed to convert image to WebP format');
    }
}
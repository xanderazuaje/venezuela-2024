import sharp from "sharp";

export async function imgToWebp(imageFile: Blob, width: number, height: number): Promise<Buffer> {
    try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        return await sharp(buffer)
            .withMetadata()
            .webp({quality: 80})
            .resize({
                width,
                height,
            })
            .toBuffer();
    } catch (error: unknown) {
        console.error((error as Error).message);
        throw new Error('Failed to convert image to WebP format');
    }
}
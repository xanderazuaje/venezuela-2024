import type { APIRoute } from 'astro';
import { uploadImage } from '@/utils/uploadImage.ts';
import { SUPABASE_MISSING_BUCKET } from '@/config';
import { supabase } from '@/lib/supabase.ts';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const imgs = formData.getAll('photos') as File[];
    const imgs_arr = imgs
      ? await Promise.all(
          imgs.map(
            async (photo: Blob) => await uploadImage(photo, SUPABASE_MISSING_BUCKET, { width: 400, height: 600 }),
          ),
        )
      : null;
    const req = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      recent_pics: imgs_arr?.map((e) => e.publicUrl),
      last_seen_place: formData.get('lastSeenPlace'),
      last_seen_date: formData.get('lastSeenDate'),
      age: formData.get('age'),
      gender: formData.get('gender'),
      height: formData.get('height'),
      hair_color: formData.get('hairColor'),
      eyes_color: formData.get('eyesColor'),
      distinctives: formData.get('distinctives'),
      last_seen_clothes: formData.get('lastSeenClothes'),
      reach_contact: formData.get('reachContact'),
      missing_person_state: formData.get('missingPersonState'),
      more_info: formData.get('moreInfo'),
    };
    const { error } = await supabase.from('Missing').insert(req);
    if (error) {
      const toDelete = imgs_arr?.map((e) => e.path);
      if (toDelete) await supabase.storage.from(SUPABASE_MISSING_BUCKET).remove(toDelete);
      return new Response(JSON.stringify({ message: error.message, status: 400 }));
    }
    return redirect('/success');
  } catch (error: unknown) {
    return new Response(JSON.stringify({ message: (error as Error).message, status: 500 }));
  }
};

import { s as supabase } from '../../../chunks/supabase_CVphukol.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  cookies,
  redirect
}) => {
  try {
    const {
      id,
      name,
      service,
      region,
      phone,
      description,
      social
    } = await request.json();
    const {
      data
    } = await supabase.auth.getSession();
    const {
      error: errorAdd
    } = await supabase.from("Contact").insert({
      name,
      service,
      region,
      phone,
      description,
      social,
      created_by: data.session?.user
    });
    if (errorAdd) return new Response(JSON.stringify({
      message: errorAdd.message,
      status: 500
    }));
    const {
      error: errorDel
    } = await supabase.from("Contact_queue").delete().eq("id", id);
    if (errorDel) return new Response(JSON.stringify({
      message: errorDel.message,
      status: 400
    }));
    return redirect("/dashboard");
  } catch (error) {
    return new Response(JSON.stringify({
      message: error.message,
      status: 500
    }));
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_C3VS3fch.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BGC_Sd2q.mjs';
import { s as supabase } from '../chunks/supabase_CVphukol.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const queue = (await supabase.from("Contact_queue").select())["data"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="mb-14 font-bold text-5xl text-center">Dashboard</h1> <div class="flex flex-col gap-6"> <div class="bg-[#ECECEC] font-bold grid-cols-5 grid text-center py-8 px-4 rounded-2xl"> <p>Fecha</p> <p>Nombre</p> <p>Estado</p> <p>Telf.</p> <p>Servicio</p> </div> ${queue?.map((e) => renderTemplate`${renderComponent($$result2, "RowDashboard", null, { "data": e, "client:only": "preact", "client:component-hydration": "only", "client:component-path": "/home/xander/work/venezuela-2024/src/components/RowDashboard", "client:component-export": "default" })}`)} </div> ` })}`;
}, "/home/xander/work/venezuela-2024/src/pages/dashboard.astro", void 0);

const $$file = "/home/xander/work/venezuela-2024/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

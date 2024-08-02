/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_C3VS3fch.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BGC_Sd2q.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Input;
  const { type, name, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(id, "id")} class="border-[#C1C1C1] border rounded-xl py-2 px-4">`;
}, "/home/xander/work/venezuela-2024/src/components/Input.astro", void 0);

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1 class="mb-14 font-bold text-5xl text-center">Log in</h1> <form action="/api/auth/signin" method="post" class="flex flex-col p-16 pt-14 border border-[#080808] rounded-2xl gap-5"> <div class="flex flex-col gap-1"> <label for="email">Email</label> ${renderComponent($$result2, "Input", $$Input, { "type": "email", "name": "email", "id": "email" })} </div> <div class="flex flex-col gap-1"> <label for="password">Password</label> ${renderComponent($$result2, "Input", $$Input, { "type": "password", "name": "password", "id": "password" })} </div> <button type="submit" class="bg-[#D00B27] text-white font-bold py-2 px-4 rounded-xl mt-3">Login</button> </form> </div> ` })}`;
}, "/home/xander/work/venezuela-2024/src/pages/signin.astro", void 0);

const $$file = "/home/xander/work/venezuela-2024/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

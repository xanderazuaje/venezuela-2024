/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_C3VS3fch.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_BGC_Sd2q.mjs';
import { s as supabase } from '../chunks/supabase_CVphukol.mjs';
export { renderers } from '../renderers.mjs';

const Footer = () => {
  return jsxs("footer", {
    class: "flex flex-col sm:flex-row items-center m-auto w-fit gap-[30px] pb-[60px] flex-wrap justify-center",
    children: [jsx("span", {
      class: "text-xl",
      children: "Hecho con el apoyo de"
    }), jsx("img", {
      src: "/mlv_logo.png",
      alt: "Logo de Movimiento Libertario de Venezuela",
      class: "w-24"
    }), jsxs("p", {
      class: "w-full text-center",
      children: ["Contacto", jsx("a", {
        href: "mailto:venezuelahelp2024@proton.me",
        class: "text-red-600 ml-1",
        children: "venezuelahelp2024@proton.me"
      })]
    })]
  });
};

const Navbar = () => {
  return jsxs("nav", {
    class: "flex gap-[40px] font-bold",
    children: [jsx("a", {
      href: "#",
      children: "Recursos y asistencia"
    }), jsx("a", {
      href: "#",
      class: "opacity-50 pointer-events-none cursor-not-allowed",
      children: "Boletín"
    })]
  });
};

const Hero = () => {
  return jsxs("header", {
    class: "flex flex-col sm:flex-row items-center w-full justify-between",
    children: [jsx("h1", {
      class: "font-bold text-5xl leading-[60px] text-pretty max-w-[608px]",
      children: "Todo lo que necesitas saber sobre tu país. Venezuela."
    }), jsx("img", {
      src: "/vzla.svg"
    })]
  });
};

const ContactFilter = ({
  contacts
}) => {
  const [filter, setFilter] = useState(null);
  const options = [...new Map(contacts.map((item) => [item.service, item])).values()];
  return jsxs(Fragment, {
    children: [jsxs("div", {
      class: "flex flex-col md:flex-row justify-center gap-[30px] my-[30px] text-[20px] items-center",
      children: [jsx("button", {
        onClick: () => setFilter(null),
        class: `py-2 px-4 rounded-2xl cursor-pointer ${!filter && "bg-gray-200 text-black"}`,
        children: "Todos"
      }), options.map(({
        service
      }) => jsxs(Fragment, {
        children: [jsx("hr", {
          class: "h-[40px] w-[1px] border-0 bg-black hidden md:block"
        }), jsx("button", {
          onClick: () => setFilter(service),
          class: `py-2 px-4 rounded-2xl cursor-pointer capitalize ${filter === service && "bg-gray-200 text-black"}`,
          children: service
        })]
      }))]
    }), jsx("div", {
      class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[30px]",
      children: contacts.filter(({
        service
      }) => service === filter || filter === null).map((e) => jsxs("div", {
        class: "flex flex-col justify-center",
        children: [jsx("img", {
          src: `/${e.service}.svg`,
          alt: e.service,
          class: "w-[60px] m-auto"
        }), jsx("p", {
          class: "capitalize text-center",
          children: e.region
        }), jsx("p", {
          class: "capitalize text-center text-[20px] font-bold",
          children: e.name
        }), jsxs("div", {
          class: "flex gap-[10px] m-auto",
          children: [jsx("img", {
            src: "/phone.svg",
            alt: ""
          }), jsxs("a", {
            href: `tel:+${e.phone}`,
            class: "block text-[#D00B27] font-sans font-bold underline",
            children: ["+", e.phone]
          })]
        }), jsx("p", {
          class: "text-center",
          children: e.description
        }), jsx("div", {})]
      }))
    })]
  });
};

const ContactList = ({
  contacts,
  reg
}) => {
  return jsxs("section", {
    class: "py-16",
    children: [jsx("h2", {
      class: "text-center font-bold text-3xl",
      children: reg ? reg.toUpperCase() : "TODOS"
    }), jsx(ContactFilter, {
      contacts
    })]
  });
};

const States = ({
  regions,
  reg
}) => {
  return jsxs("section", {
    class: "w-full",
    children: [jsx("h2", {
      class: "text-3xl",
      children: "Encuentra la última información de tu estado."
    }), jsx("hr", {
      class: "bg-gray-700 h-[1px] border-0"
    }), jsxs("div", {
      class: "grid grid-cols-1 gap-y-6 py-7 mx-7 sm:grid-cols-3 md:grid-cols-5",
      children: [jsx("a", {
        class: `block uppercase button text-center ${!reg && "text-red-500"}`,
        href: "/",
        children: "Todos"
      }), regions.map((region) => jsx("a", {
        href: `?reg=${region.replace(" ", "+")}`,
        class: `block uppercase button text-center ${region === reg && "text-red-500"}`,
        children: region
      }))]
    }), jsx("hr", {
      class: "bg-gray-700 h-[1px] border-0"
    })]
  });
};

const sortRegion = (regions) => {
  return regions.sort((a, b) => {
    if (a.region < b.region) return -1;
    if (a.region > b.region) return 1;
    return 0;
  });
};

const getContactList = async (reg) => {
  const contact_query = reg ? await supabase.from("Contact").select(`*`).eq("region", reg) : await supabase.from("Contact").select(`*`);
  return contact_query["data"] ?? [];
};

const getRegionList = async () => {
  return (await supabase.from("Contact").select("region"))["data"] ?? [];
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let regions = [];
  let contacts = [];
  const reg = Astro2.url.searchParams.get("reg") ?? null;
  try {
    const regions_arr = await getRegionList();
    regions = [...new Set(sortRegion(regions_arr).map((e) => e.region))];
  } catch (error) {
    console.error("Error fetching region list:", error);
  }
  try {
    contacts = await getContactList(reg);
  } catch (error) {
    console.error("Error fetching contact list:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Venezuela Help 2024" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "Hero", Hero, {})} ${renderComponent($$result2, "States", States, { "regions": regions, "reg": reg })} ${renderComponent($$result2, "Contacts", ContactList, { "client:load": true, "contacts": contacts, "reg": reg, "client:component-hydration": "load", "client:component-path": "@/components/ContactList.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/xander/work/venezuela-2024/src/pages/index.astro", void 0);

const $$file = "/home/xander/work/venezuela-2024/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

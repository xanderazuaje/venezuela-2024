import { useState } from "preact/hooks";
import "@/index.css";
import type { ContactProps } from "@/interfaces/contact.interface";

type ContactFilterProps = {
  contacts: ContactProps[];
};

const ContactFilter = ({ contacts }: ContactFilterProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  const options = [
    ...new Map(contacts.map((item) => [item.service, item])).values(),
  ];

  return (
    <>
      <div class="flex flex-col md:flex-row justify-center gap-[30px] my-[30px] text-[16px] items-center">
        <button
          onClick={() => setFilter(null)}
          class={`py-2 px-4 rounded-2xl cursor-pointer ${
            !filter && "bg-gray-200 text-black"
          }`}
        >
          Todos
        </button>
        {options.map(({ service }) => (
          <>
            <hr class="h-[40px] w-[1px] border-0 bg-black hidden md:block" />
            <button
              onClick={() => setFilter(service)}
              class={`hover:shadow-sm hover:shadow-gray-400 py-2 px-7 rounded-2xl cursor-pointer capitalize ${
                filter === service && "bg-gray-200 text-black"
              }`}
            >
              {service}
            </button>
          </>
        ))}
      </div>
      <div class="grid grid-cols-1 gap-10 mt-16 sm:grid-cols-2 md:grid-cols-3 md:mt-24 md:gap-16">
        {contacts
          .filter(({ service }) => service === filter || filter === null)
          .map((e) => (
            <div class="flex flex-col justify-center">
              <img
                src={`/${e.service}.svg`}
                alt={e.service}
                class="w-[60px] m-auto"
              />
              <p class="capitalize text-center">{e.region}</p>
              <p class="capitalize text-center text-[20px] font-bold">
                {e.name}
              </p>
              <div class="flex gap-[10px] m-auto">
                <img src="/phone.svg" alt="" />
                <a
                  href={`tel:${ e.phone.charAt(0) == '+' ? e.phone : '+' + e.phone}`}
                  class="block text-[#D00B27] font-sans font-bold underline"
                >
                  { e.phone.charAt(0) == '+' ? e.phone : '+' + e.phone}
                </a>
              </div>
              <p class="text-center">{e.description}</p>
              <div></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ContactFilter;
import { useState } from "preact/hooks";
import type { ContactProps } from "@/interfaces/contact.interface";
import Card from "@/components/UI/Card";
import { useMemo } from "preact/hooks";

type ContactFilterProps = {
  contacts: ContactProps[];
};

const ContactFilter = ({ contacts }: ContactFilterProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  const options = useMemo(() => {
    return [...new Map(contacts.map((item) => [item.service, item])).values()];
  }, [contacts]);

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
            <hr class="h-9 w-[1px] border-l border-gray-700 hidden md:block" />
            <button
              onClick={() => setFilter(service)}
              class={`hover:shadow-sm hover:shadow-gray-300 transition-shadow duration-150 py-2 px-7 rounded-2xl cursor-pointer capitalize ${
                filter === service && "bg-gray-200 text-black"
              }`}
            >
              {service}
            </button>
          </>
        ))}
      </div>
      <div class="grid gap-10 mt-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-24 md:gap-16">
        {contacts
          .filter(({ service }) => service === filter || filter === null)
          .map((contact) => (
            <Card contact={contact} />
          ))}
      </div>
    </>
  );
};

export default ContactFilter;

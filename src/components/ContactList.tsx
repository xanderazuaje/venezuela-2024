import ContactFilter from "./ContactFilter";
import type { ContactProps } from "@/interfaces/contact.interface";

type ContactListProps = {
  contacts: ContactProps[];
  reg: string | null;
};

const Contacts = ({ contacts, reg }: ContactListProps) => {
  return (
    <section class="py-16">
      <h2 class="text-center font-bold text-[30px]">
        {reg ? reg.toUpperCase() : "TODOS"}
      </h2>
      <ContactFilter contacts={contacts} />
    </section>
  );
};

export default Contacts;

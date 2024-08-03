import ContactFilter from "./ContactFilter";
import type { ContactProps } from "@/interfaces/contact.interface";

type ContactListProps = {
  contacts: ContactProps[];
  reg: string | null;
};

const ContactList = ({ contacts, reg }: ContactListProps) => {
  return (
    <section class="py-16">
      <h2 class="text-center font-bold text-3xl">
        {reg ? reg.toUpperCase() : "TODOS"}
      </h2>
      <ContactFilter contacts={contacts} />
    </section>
  );
};

export default ContactList;

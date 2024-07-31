import Filter from "./ContactFilter";

type Props = {
  contacts: any;
  reg: string | null;
};

const Contacts = ({ contacts, reg }: Props) => {
  return (
    <section class="py-[60px]">
      <h2 class="text-center font-bold text-[30px]">
        {reg ? reg.toUpperCase() : "TODOS"}
      </h2>
      <Filter elements={contacts} />
    </section>
  );
};

export default Contacts;

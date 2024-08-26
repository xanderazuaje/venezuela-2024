import NgoFilter from "./NgoFilter.tsx";
import type {NgoProps} from "@/interfaces/ngo.interface.ts";

type ContactListProps = {
  ngo_s: NgoProps[];
  type: string | null;
};

const NgoList = ({ ngo_s, type }: ContactListProps) => {
  return (
    <section class="py-16">
      <h2 class="text-center font-bold text-3xl">
        {type ? type.toUpperCase() : "TODOS"}
      </h2>
      <NgoFilter ngo_s={ngo_s} />
    </section>
  );
};

export default NgoList;

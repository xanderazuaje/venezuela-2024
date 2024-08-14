import { useState } from "preact/hooks";
import Card from "@/components/donations/Card.tsx";
import { useMemo } from "preact/hooks";
import type {NgoProps} from "@/interfaces/ngo.interface.ts";

type NgoFilterProps = {
  ngo_s: NgoProps[];
};

const NgoFilter = ({ ngo_s }: NgoFilterProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  const options = useMemo(() => {
    return [...new Map(ngo_s.map((item) => [item.type, item])).values()];
  }, [ngo_s]);

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
        {options.map(({ type }) => (
          <>
            <hr class="h-9 w-[1px] border-l border-gray-700 hidden md:block" />
            <button
              onClick={() => setFilter(type)}
              class={`hover:bg-gray-200 transition-shadow duration-150 py-2 px-7 rounded-2xl cursor-pointer capitalize ${
                filter === type && "bg-gray-200 text-black"
              }`}
            >
              {type}
            </button>
          </>
        ))}
      </div>
      <div class="grid gap-10 mt-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-24 md:gap-16">
        {ngo_s
          .filter(({ type }) => type === filter || filter === null)
          .map((ngo) => (
            <Card ngo={ngo} />
          ))}
      </div>
    </>
  );
};

export default NgoFilter;

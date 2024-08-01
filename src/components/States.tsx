import type { RegionProps } from "@/interfaces/region.interface";

type StatesProps = {
  regions: RegionProps[];
  reg: string | null;
};

const States = ({ regions, reg }: StatesProps) => {
  return (
    <section class="w-full">
      <h2 class="text-3xl">Encuentra la última información de tu estado.</h2>
      <hr class="bg-gray-700 h-[1px] border-0" />
      <div class="grid grid-cols-1 gap-y-6 py-7 mx-7 sm:grid-cols-3 md:grid-cols-5">
        <a
          class={`block uppercase button text-center ${!reg && "text-red-500"}`}
          href="/"
        >
          Todos
        </a>
        {regions.map(({ region }) => (
          <a
            href={`?reg=${region.replace(" ", "+")}`}
            class={`block uppercase button text-center ${
              region === reg && "text-red-500"
            }`}
          >
            {region}
          </a>
        ))}
      </div>
      <hr class="bg-gray-700 h-[1px] border-0" />
    </section>
  );
};

export default States;

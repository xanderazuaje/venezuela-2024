type StatesProps = {
  regions: string[];
  reg: string | null;
};

const States = ({ regions, reg }: StatesProps) => {
  return (
    <section class="w-full">
      <h2 class="font-semibold text-2xl mb-5">Encuentra la última información de tu estado.</h2>
      <hr class="bg-gray-700 h-[1px] border-0" />
      <div class="grid grid-cols-1 gap-y-6 py-7 mx-7 md:grid-cols-3 lg:grid-cols-4">
        <a
          class={`block uppercase button text-center ${!reg && "text-red-500"}`}
          href="/"
        >
          Todos
        </a>
        {regions.map((region) => (
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

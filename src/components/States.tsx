type Props = {
  regions: Array<string>;
  reg: string | null;
};

const States = ({ regions, reg }: Props) => {
  return (
    <section class="w-full">
      <h2 class="text-[30px]">Encuentra la última información de tu estado.</h2>
      <hr class="bg-black h-[0.5px] border-0" />
      <div class="grid grid-cols-1 gap-y-[25px] py-[30px] mx-[30px] sm:grid-cols-3 md:grid-cols-5">
        <a
          class={`block uppercase button text-center ${
            reg === null ? "selected" : ""
          }`}
          href="/"
        >
          Todos
        </a>
        {regions.map((region) => (
          <a
            href={`?reg=${region.replace(" ", "+")}`}
            class={`block uppercase button text-center ${
              region === reg ? "selected" : ""
            }`}
          >
            {region}
          </a>
        ))}
      </div>

      <hr class="bg-black h-[1px] border-0" />
    </section>
  );
};

export default States;

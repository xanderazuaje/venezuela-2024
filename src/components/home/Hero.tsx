const Hero = () => {
  return (
    <header class="flex flex-col sm:flex-row items-center w-full justify-between">
      <h1 class="font-bold text-5xl leading-[60px] text-pretty max-w-[608px]">
        Todo lo que necesitas saber sobre tu país. Venezuela.
      </h1>
        <div class="relative mt-4 md:mt-0">
            <a href="/form" class="bg-white border-2 border-[#080808] rounded-3xl font-bold block text-center md:p-2">Soy una ONG/profesional</a>
            <img src="/vzla.svg" />
        </div>
    </header>
  );
};

export default Hero;

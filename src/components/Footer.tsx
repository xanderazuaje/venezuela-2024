const Footer = () => {
  return (
    <footer class="flex flex-col sm:flex-row items-center m-auto w-fit gap-[30px] pb-[60px] flex-wrap justify-center">
      <span class="text-xl">Hecho con el apoyo de</span>
      <img
        src="/mlv_logo.png"
        alt="Logo de Movimiento Libertario de Venezuela"
        class="w-24"
      />
      <p class="w-full text-center">
        Contacto
        <a
          href="mailto:venezuelahelp2024@proton.me"
          class="text-[#D00B27] ml-1"
        >
          venezuelahelp2024@proton.me
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import type { ContactProps } from "@/interfaces/contact.interface";
import type React from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

type CardProps = {
  contact: ContactProps;
};

const Card = ({ contact }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsClamping, setNeedsClamping] = useState(false);
  const contentRef = useRef(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      const isClamped = element.scrollHeight > element.clientHeight;
      setNeedsClamping(isClamped);
    }
  }, []);

  const formatPhone = (phone: string) =>
    phone.charAt(0) === "+" ? phone : "+" + phone;

  return (
    <div class="flex flex-col justify-center">
      <img
        src={`/${contact.service}.svg`}
        alt={contact.service}
        class="w-14 m-auto"
      />
      <p class="capitalize text-center select-none">{contact.region}</p>
      <p
        title={contact.name}
        className="capitalize text-center text-xl text-pretty font-bold select-none line-clamp-2"
      >
        {contact.name}
      </p>

      <a
        rel="noreferrer"
        title={`Contactar al ${formatPhone(contact.phone)}`}
        href={`tel:${formatPhone(contact.phone)}`}
        className="text-[#D00B27] text-center underline font-bold my-2"
      >
        <span>{formatPhone(contact.phone)}</span>
      </a>

      <div class="flex gap-6 items-center justify-center mt-2">
        <a
          rel="noreferrer"
          title={`Contactar al ${formatPhone(contact.phone)}`}
          href={`tel:${formatPhone(contact.phone)}`}
          className="text-[#D00B27] w-10 h-10 flex items-center border border-gray-300 
          justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <img
            width={20}
            height={20}
            src="/phone.svg"
            alt="numero de telefono"
            className={"pointer-events-none"}
          />
        </a>
        <a
          title="Escribir al Whatsapp"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors duration-200"
          href={`https://api.whatsapp.com/send?phone=${formatPhone(
            contact.phone
          )}&text=Hola%20necesito%20su%20ayuda%20por%20favor`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="pointer-events-none"
            src="/whatsapp.svg"
            width={20}
            height={20}
            alt="whatsapp"
          />
        </a>
      </div>

      <div className="max-w-xs mx-auto text-center overflow-hidden md:max-w-2xl">
        <div className="p-2">
          <div
            ref={contentRef}
            className={`text-pretty text-sm ${!isExpanded && "line-clamp-2"}`}
          >
            {contact.description}
          </div>
          {needsClamping && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#D00B27] mx-auto cursor-pointer"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

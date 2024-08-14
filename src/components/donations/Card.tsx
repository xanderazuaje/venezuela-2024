import type React from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";
import type {NgoProps} from "@/interfaces/ngo.interface.ts";

type CardProps = {
  ngo: NgoProps;
};

const Card = ({ ngo }: CardProps) => {
    console.log(ngo.picture)
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

  return (
    <div class="w-64 flex flex-col justify-center">
      <img
        src={ngo.picture ?? (ngo.type === 'goFundMe' ? '/gofundme_logo.svg' : 'default-ngo.svg')}
        alt={ngo.name}
        class="mx-auto overflow-hidden rounded-full"
      />
      <h3 className="text-center text-xl text-pretty font-bold select-none line-clamp-2 md:text-lg xl:text-xl" >
        {ngo.name}
      </h3>
      <span class="capitalize text-center select-none text-custom-red">{ngo.type}</span>
      <div className="flex-grow max-w-xs mx-auto text-center overflow-hidden md:max-w-2xl">
        <div className="p-2">
          <p
            ref={contentRef}
            className={`text-pretty text-lg ${!isExpanded && "line-clamp-3"}`}
          >
            {ngo.description}
          </p>
          {needsClamping && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-custom-red mx-auto cursor-pointer"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </div>
        <a
        href={ngo.url}
        class="bg-custom-red text-white hover:bg-[#B00920] font-semibold py-2 px-4 rounded-xl mt-3 text-center relative w-4/5 m-auto"
        target="_blank"
        >
            Dona
            <img src="/open_in_new.svg" alt="" class="absolute right-3 top-1/2 -translate-y-1/2"/>
        </a>
    </div>
  );
};

export default Card;

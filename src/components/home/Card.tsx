import type { ContactProps } from '@/interfaces/contact.interface.ts';
import type React from 'preact/compat';
import { useEffect, useRef, useState } from 'preact/hooks';

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

  const formatPhone = (phone: string) => (phone.charAt(0) === '+' ? phone : '+' + phone);

  return (
    <div class='flex w-64 flex-col justify-center'>
      <img src={`/${contact.service}.svg`} alt={contact.service} class='mx-auto w-14' />
      <p class='select-none text-center capitalize'>{contact.region}</p>
      <p
        title={contact.name}
        className='line-clamp-2 select-none text-pretty text-center text-xl font-bold capitalize md:text-lg xl:text-xl'
      >
        {contact.name}
      </p>

      <a
        rel='noreferrer'
        title={`Contactar al ${formatPhone(contact.phone)}`}
        href={`tel:${formatPhone(contact.phone)}`}
        className='my-2 text-center font-bold text-custom-red underline'
      >
        <span>{formatPhone(contact.phone)}</span>
      </a>

      <div class='mt-2 flex items-center justify-center gap-6'>
        <a
          rel='noreferrer'
          title={`Contactar al ${formatPhone(contact.phone)}`}
          href={`tel:${formatPhone(contact.phone)}`}
          className='flex h-10 w-10 items-center justify-center rounded-full border 
          border-gray-300 bg-gray-200 p-2 text-custom-red transition-colors duration-200 hover:bg-gray-300'
        >
          <img width={20} height={20} src='/phone.svg' alt='numero de telefono' className={'pointer-events-none'} />
        </a>
        <a
          title='Escribir al Whatsapp'
          className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-gray-200 p-2 transition-colors duration-200 hover:bg-gray-300'
          href={`https://api.whatsapp.com/send?phone=${formatPhone(
            contact.phone
          )}&text=Hola%20necesito%20su%20ayuda%20por%20favor`}
          target='_blank'
          rel='noreferrer'
        >
          <img className='pointer-events-none' src='/whatsapp.svg' width={20} height={20} alt='whatsapp' />
        </a>
      </div>

      <div className='mx-auto max-w-xs flex-grow overflow-hidden text-center md:max-w-2xl'>
        <div className='p-2'>
          <div ref={contentRef} className={`text-pretty text-sm ${!isExpanded && 'line-clamp-3'}`}>
            {contact.description}
          </div>
          {needsClamping && (
            <button onClick={() => setIsExpanded(!isExpanded)} className='mx-auto cursor-pointer text-custom-red'>
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

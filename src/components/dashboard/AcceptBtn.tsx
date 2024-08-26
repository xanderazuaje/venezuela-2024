type AcceptBtnProps = {
  onClick: () => Promise<void>;
};

export default function AcceptBtn({ onClick }: AcceptBtnProps) {
  return (
    <svg
      width='51'
      height='51'
      viewBox='0 0 V51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      class='cursor-pointer'
      onClick={onClick}
    >
      <g clip-path='url(#clip0_104_96)'>
        <path
          d='M6.375 25.5C6.375 28.0115 6.86968 30.4985 7.8308 32.8188C8.79192 35.1392 10.2007 37.2475 11.9766 39.0234C13.7525 40.7993 15.8608 42.2081 18.1812 43.1692C20.5015 44.1303 22.9885 44.625 25.5 44.625C28.0115 44.625 30.4985 44.1303 32.8188 43.1692C35.1392 42.2081 37.2475 40.7993 39.0234 39.0234C40.7993 37.2475 42.2081 35.1392 43.1692 32.8188C44.1303 30.4985 44.625 28.0115 44.625 25.5C44.625 22.9885 44.1303 20.5015 43.1692 18.1812C42.2081 15.8608 40.7993 13.7525 39.0234 11.9766C37.2475 10.2007 35.1392 8.79193 32.8188 7.8308C30.4985 6.86968 28.0115 6.375 25.5 6.375C22.9885 6.375 20.5015 6.86968 18.1812 7.8308C15.8608 8.79193 13.7525 10.2007 11.9766 11.9766C10.2007 13.7525 8.79192 15.8608 7.8308 18.1812C6.86968 20.5015 6.375 22.9885 6.375 25.5Z'
          stroke='white'
          stroke-width='2.75'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M19.125 25.5L23.375 29.75L31.875 21.25'
          stroke='white'
          stroke-width='2.75'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_104_96'>
          <rect width='51' height='51' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

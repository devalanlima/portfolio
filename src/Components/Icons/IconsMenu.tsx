import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export default function IconsMenu({ className }: Props) {
  return (
    <>
      <svg
        className={twMerge('fill-primary w-[25px] h-[25px]', className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 24 24"
      >
        <path
          d="M2.875 17.25v-1.4375h5.75v1.4375H2.875Zm0 -5.03125v-1.4375h11.5v1.4375H2.875ZM2.875 7.1875v-1.4375h17.25v1.4375H2.875Z"
          stroke-width="1"
        />
      </svg>
    </>
  );
}

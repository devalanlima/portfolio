import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export default function IconsClose({ className }: Props) {
  return (
    <>
      <svg
        className={twMerge('fill-primary w-[25px] h-[25px]', className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 24 24"
      >
        <path d="m5.965433333333333 18.040625 -1.00625 -1.00625L10.493558333333333 11.5l-5.534375000000001 -5.534375000000001 1.00625 -1.00625 5.534375000000001 5.534375000000001 5.534375000000001 -5.534375000000001 1.00625 1.00625L12.506058333333334 11.5l5.534375000000001 5.534375000000001 -1.00625 1.00625 -5.534375000000001 -5.534375000000001 -5.534375000000001 5.534375000000001Z" />
      </svg>
    </>
  );
}

import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export default function IconsLeftClick({ className }: Props) {
  return (
    <>
      <svg
        className={twMerge('fill-primary w-[25px] h-[25px]', className)}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.8988625000000003 11.667708333333335v-1.4375h3.01875v1.4375h-3.01875Zm2.73125 5.534375000000001 -0.9583333333333334 -0.9583333333333334 2.1083333333333334 -2.1083333333333334 0.9583333333333334 0.9583333333333334 -2.1083333333333334 2.1083333333333334Zm1.15 -9.511458333333334 -2.1083333333333334 -2.1083333333333334 0.9583333333333334 -0.9583333333333334 2.1083333333333334 2.1083333333333334 -0.9583333333333334 0.9583333333333334Zm10.948958333333334 11.5 -4.504166666666667 -4.504166666666667 -1.0541666666666667 3.2583333333333333 -2.4916666666666667 -8.625 8.433333333333334 2.659375 -3.3062500000000004 1.1739583333333334 4.480208333333334 4.480208333333334 -1.5572916666666667 1.5572916666666667Zm-7.259375 -13.296875V2.875h1.4375v3.01875h-1.4375Zm5.127083333333333 1.796875 -0.9583333333333334 -0.9583333333333334 2.1083333333333334 -2.1083333333333334 0.9583333333333334 0.9583333333333334 -2.1083333333333334 2.1083333333333334Z"
          stroke-width="1"
        />
      </svg>
    </>
  );
}

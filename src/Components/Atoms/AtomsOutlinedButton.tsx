import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function AtomsOutlinedButton({
  children,
  className,
  ...rest
}: Props) {
  return (
    <button
      className={twMerge('p-2 outline outline-2 outline-primary', className)}
      {...rest}
    >
      {children}
    </button>
  );
}

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
      className={twMerge('outline outline-2 outline-primary p-2', className)}
      {...rest}
    >
      {children}
    </button>
  );
}

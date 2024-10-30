import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AtomsParagraph({
  children,
  className,
  ...rest
}: Props) {
  return (
    <p
      {...rest}
      className={twMerge(
        'text-sm font-CourierPrime text-primary leading-4',
        className
      )}
    >
      {children}
    </p>
  );
}

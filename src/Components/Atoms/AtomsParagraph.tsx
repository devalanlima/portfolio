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
        'font-CourierPrime text-sm leading-4 text-primary sm:text-lg sm:leading-5 lg:text-xl',
        className
      )}
    >
      {children}
    </p>
  );
}

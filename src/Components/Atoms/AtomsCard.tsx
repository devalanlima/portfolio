import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AtomsCard({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative z-0 border-2 border-primary bg-primary p-3 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-3xl after:bg-secondary',
        className
      )}
    >
      {children}
    </div>
  );
}

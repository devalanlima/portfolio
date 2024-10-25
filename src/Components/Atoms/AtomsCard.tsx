import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AtomsCard({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'border-2 border-primary bg-primary relative p-3 z-0 after:bg-secondary after:absolute  after:top-0 after:left-0 after:w-full after:h-full after:rounded-3xl after:-z-10',
        className
      )}
    >
      {children}
    </div>
  );
}

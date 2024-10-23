interface Props {
  children: React.ReactNode;
}

export default function AtomsChip({ children }: Props) {
  return (
    <div
      className={
        'px-3 flex py-1 bg-secondary text-primary rounded-full w-fit font-CourierPrime text-xs leading-none outline-primary outline-2 font-bold outline cursor-pointer hover:scale-105'
      }
    >
      <span className="mt-1">{children}</span>
    </div>
  );
}

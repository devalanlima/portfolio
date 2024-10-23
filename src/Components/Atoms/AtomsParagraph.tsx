interface Props {
  children: React.ReactNode;
}

export default function AtomsParagraph({ children }: Props) {
  return (
    <p className="text-sm font-CourierPrime text-primary leading-4">
      {children}
    </p>
  );
}

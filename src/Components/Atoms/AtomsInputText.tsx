interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export default function AtomsInputText({ label, ...rest }: Props) {
  return (
    <label className="relative flex flex-col gap-2 border-b-2 border-primary bg-none p-2">
      <p className="absolute -top-3 left-1 text-xs">{label}</p>
      <input
        className="border-none bg-secondary font-CourierPrime text-primary outline-none placeholder:text-primary focus:placeholder:text-secondary"
        {...rest}
      />
    </label>
  );
}

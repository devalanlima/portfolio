interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export default function AtomsInputText({ label, ...rest }: Props) {
  return (
    <label className="flex flex-col gap-2 border-b-2 border-primary p-2 bg-none relative">
      <p className="text-xs absolute -top-3 left-1">{label}</p>
      <input
        className="placeholder:text-primary focus:placeholder:text-secondary font-CourierPrime border-none outline-none bg-secondary text-primary"
        {...rest}
      />
    </label>
  );
}

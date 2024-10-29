interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function AtomsInputText({ label, ...rest }: Props) {
  return (
    <label className="flex gap-2 border-b-2 border-primary p-2 bg-none">
      {label}
      <input
        className="placeholder:text-primary focus:placeholder:text-secondary font-CourierPrime border-none outline-none bg-secondary text-primary"
        {...rest}
      />
    </label>
  );
}

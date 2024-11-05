interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
}

export default function AtomsInputTextarea({ label, ...rest }: Props) {
  return (
    <label className="relative flex flex-col gap-2">
      <p className="absolute -top-0 left-1 text-xs">{label}</p>
      <textarea
        {...rest}
        className="w-full resize-none overflow-y-auto bg-[repeating-linear-gradient(rgb(var(--secondary-color)),rgb(var(--secondary-color))_50px,rgb(var(--primary-color))_50px,rgb(var(--primary-color))_52px,rgb(var(--secondary-color))_52px)] bg-local p-2 font-CourierPrime leading-[52px] text-primary placeholder:text-primary focus:outline-0 focus:placeholder:text-secondary"
      ></textarea>
    </label>
  );
}

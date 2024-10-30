interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
}

export default function AtomsInputTextarea({ label, ...rest }: Props) {
  return (
    <label className="relative flex flex-col gap-2">
      <p className="text-xs absolute -top-0 left-1">{label}</p>
      <textarea
        {...rest}
        className="p-2 font-CourierPrime  text-primary placeholder:text-primary focus:outline-0  bg-[repeating-linear-gradient(rgb(var(--secondary-color)),rgb(var(--secondary-color))_50px,rgb(var(--primary-color))_50px,rgb(var(--primary-color))_52px,rgb(var(--secondary-color))_52px)] bg-local leading-[52px] resize-none w-full overflow-y-auto focus:placeholder:text-secondary"
      ></textarea>
    </label>
  );
}

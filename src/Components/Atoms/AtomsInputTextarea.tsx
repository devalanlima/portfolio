interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function AtomsInputTextarea({ label, ...rest }: Props) {
  return (
    <label>
      {label}
      <textarea
        {...rest}
        className="p-2 font-CourierPrime  text-primary placeholder:text-primary focus:outline-0  bg-[repeating-linear-gradient(rgb(var(--secondary-color)),rgb(var(--secondary-color))_50px,rgb(var(--primary-color))_50px,rgb(var(--primary-color))_52px,rgb(var(--secondary-color))_52px)] bg-local leading-[52px] resize-none w-full overflow-y-auto focus:placeholder:text-secondary"
      ></textarea>
    </label>
  );
}

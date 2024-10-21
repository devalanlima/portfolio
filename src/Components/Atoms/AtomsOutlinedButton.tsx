interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function AtomsOutlinedButton({ children, ...rest }: Props) {
  return (
    <button className="outline outline-2 outline-primary p-2" {...rest}>
      {children}
    </button>
  );
}

import { useEffect } from 'react';
import AtomsInputText from '../Atoms/AtomsInputText';

interface Props {
  isEmailValid: (isValid: boolean) => void;
  inputEmail: string;
  setInputEmail: (value: string) => void;
}

export default function MoleculesEmailField({
  isEmailValid,
  inputEmail,
  setInputEmail,
}: Props) {
  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const isInputEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const emailLabel = () => {
    return (
      !isInputEmailValid() &&
      inputEmail.length !== 0 && (
        <span className="text-[#ff0c0c] font-CourierPrime">
          Insira um e-mail válido
        </span>
      )
    );
  };

  useEffect(() => {
    isEmailValid(isInputEmailValid() && inputEmail.length !== 0);
  }, [inputEmail]);

  return (
    <AtomsInputText
      value={inputEmail}
      onChange={handleOnChangeEmail}
      label={emailLabel()}
      type="email"
      name="e-mail"
      placeholder="Seu E-mail"
      required
    />
  );
}

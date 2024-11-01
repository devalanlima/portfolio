import { useEffect } from 'react';
import AtomsInputText from '../Atoms/AtomsInputText';

interface Props {
  isNameValid: (isValid: boolean) => void;
  inputName: string;
  setInputName: (value: string) => void;
}

export default function MoleculesNameField({
  isNameValid,
  inputName,
  setInputName,
}: Props) {
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const isInputNameValid = () => {
    return inputName.length >= 3;
  };

  const nameLabel = () => {
    return (
      !isInputNameValid() &&
      inputName.length !== 0 && (
        <span className="text-[#ff0c0c] font-CourierPrime">
          Minimo de 3 caractéres
        </span>
      )
    );
  };

  useEffect(() => {
    isNameValid(isInputNameValid() && inputName.length !== 0);
  }, [inputName]);

  return (
    <AtomsInputText
      value={inputName}
      onChange={handleOnChangeName}
      label={nameLabel()}
      type="text"
      name="name"
      placeholder="Seu Nome"
      required
    />
  );
}

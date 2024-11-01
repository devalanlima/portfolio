import { useEffect } from 'react';
import AtomsInputTextarea from '../Atoms/AtomsInputTextarea';

interface Props {
  isMessageValid: (isValid: boolean) => void;
  inputMessage: string;
  setInputMessage: (value: string) => void;
}

export default function MoleculeMessageField({
  isMessageValid,
  inputMessage,
  setInputMessage,
}: Props) {
  const handleOnChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputMessage(event.target.value);
  };

  const isInputMessageValid = () => {
    return inputMessage.length >= 15;
  };

  const messageLabel = () => {
    return (
      !isInputMessageValid() &&
      inputMessage.length !== 0 && (
        <span className="text-[#ff0c0c] font-CourierPrime">
          Minimo de 15 caractéres
        </span>
      )
    );
  };

  useEffect(() => {
    isMessageValid(isInputMessageValid() && inputMessage.length !== 0);
  }, [inputMessage]);

  return (
    <AtomsInputTextarea
      value={inputMessage}
      onChange={handleOnChangeMessage}
      label={messageLabel()}
      name="message"
      placeholder="Sua Mensagem"
      rows={3}
      required
    />
  );
}

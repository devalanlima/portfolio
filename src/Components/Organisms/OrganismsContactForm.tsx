import { useState } from 'react';
import AtomsBaseButton from '../Atoms/AtomsBaseButton';
import MoleculesModal from '../Molecules/MoleculesModal';
import MoleculesNameField from '../Molecules/MoleculesNameField';
import MoleculesEmailField from '../Molecules/MoleculesEmailField';
import MoleculeMessageField from '../Molecules/MoleculesMessageField';
import AtomsLoading from '../Atoms/AtomsLoading';

export default function OrganismsContactForm() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const modalMessages = {
    success: 'Formulário enviado com sucesso!',
    error: 'Houve um erro ao enviar o formulário.',
    fail: 'Confira se o formulário foi preenchido corretamente',
  };

  const clearForm = () => {
    setInputName('');
    setInputEmail('');
    setInputMessage('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (isNameValid && isEmailValid && isMessageValid) {
      fetch('https://formspree.io/f/xeoqevqp', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            setModalMessage(modalMessages.success);
          } else {
            setModalMessage(modalMessages.error);
          }
          setIsLoading(false);
          setIsModalOpen(true);
          clearForm();
        })
        .catch(error => {
          console.error('Error:', error);
          setModalMessage(modalMessages.error);
          setIsLoading(false);
          setIsModalOpen(true);
        });
    } else {
      setModalMessage(modalMessages.fail);
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  const handleNameValidation = (value: boolean) => {
    setIsNameValid(value);
  };

  const handleEmailValidation = (value: boolean) => {
    setIsEmailValid(value);
  };

  const handleMessageValidation = (value: boolean) => {
    setIsMessageValid(value);
  };

  return (
    <>
      <AtomsLoading isLoading={isLoading} />

      <MoleculesModal
        message={modalMessage}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <form
        className="flex flex-col gap-10 text-primary sm:text-lg sm:leading-5 lg:text-xl"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xeoqevqp"
        method="POST"
        onSubmit={handleSubmit}
      >
        <MoleculesNameField
          inputName={inputName}
          setInputName={setInputName}
          isNameValid={handleNameValidation}
        />

        <MoleculesEmailField
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          isEmailValid={handleEmailValidation}
        />

        <MoleculeMessageField
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          isMessageValid={handleMessageValidation}
        />

        <AtomsBaseButton type="submit" children="Enviar" />
      </form>
    </>
  );
}

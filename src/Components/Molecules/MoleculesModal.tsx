import { useEffect, useRef } from 'react';
import AtomsCard from '../Atoms/AtomsCard';
import AtomsOutlinedButton from '../Atoms/AtomsOutlinedButton';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  message: string;
}

export default function MoleculesModal({
  isModalOpen,
  setIsModalOpen,
  message,
}: Props) {
  const $dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    isModalOpen ? $dialog.current?.showModal() : $dialog.current?.close();
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <dialog ref={$dialog}>
      <AtomsCard className="flex flex-col gap-6 text-primary p-6">
        {message}
        <AtomsOutlinedButton
          className="self-center px-4"
          onClick={closeModal}
          children="Ok"
        />
      </AtomsCard>
    </dialog>
  );
}

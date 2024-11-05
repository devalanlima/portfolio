import { useEffect, useRef } from 'react';

interface Props {
  isLoading: boolean;
}

export default function AtomsLoading({ isLoading }: Props) {
  const $dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    isLoading ? $dialog.current?.showModal() : $dialog.current?.close();
  }, [isLoading]);

  return (
    <dialog ref={$dialog} className="bg-secondary/0 p-3">
      <span className="sr-only">Loading</span>
      <div className="h-[50px] w-[50px] animate-spin rounded-full border-4 border-primary border-t-secondary/0"></div>
    </dialog>
  );
}

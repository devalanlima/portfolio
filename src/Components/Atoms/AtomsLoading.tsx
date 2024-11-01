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
    <dialog ref={$dialog} className="p-3 bg-secondary/0 ">
      <span className="sr-only">Loading</span>
      <div className="border-4 border-t-secondary/0 border-primary animate-spin w-[50px] h-[50px] rounded-full"></div>
    </dialog>
  );
}

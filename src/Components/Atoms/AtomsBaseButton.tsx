import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function AtomsBaseButton({
  onClick,
  children,
  className,
  ...rest
}: Props) {
  const styles = {
    default: 'pb-3 pt-1 pr-3 pl-1 after:-top-1 after:-left-1',
    pressed: 'p-2 after:top-0 after:left-0',
  };

  const [btnStyle, setBtnStyle] = useState(styles.default);

  const handleMouseDown = () => {
    setBtnStyle(styles.pressed);
  };

  const handleMouseUp = () => {
    setBtnStyle(styles.default);
    onClick && onClick();
  };

  const handleMouseLeave = () => {
    setBtnStyle(styles.default);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...rest}
      className={twMerge(
        `border-2 border-primary bg-primary relative  z-0 after:bg-secondary after:absolute after:w-full after:h-full after:-z-10 after:outline after:outline-2 after:outline-primary ${btnStyle}`,
        className
      )}
    >
      {children}
    </button>
  );
}

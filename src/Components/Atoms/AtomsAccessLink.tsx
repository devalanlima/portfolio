import { Link } from 'react-router-dom';
import IconsLeftClick from '../Icons/IconsLeftClick';
import IconsLeftHold from '../Icons/IconsLeftHold';
import { useState } from 'react';

interface Props {
  url: string;
  text?: string;
}

export default function AtomsAccessLink({ text, url }: Props) {
  const [isHover, setIsHover] = useState(false);
  const LinkIcon = isHover ? IconsLeftClick : IconsLeftHold;
  const handleOnMouseEnter = () => {
    setIsHover(true);
  };
  const handleOnMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-pointer items-center gap-1"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span className="mt-1 font-CourierPrime group-hover:font-bold group-hover:underline">
        {text}
      </span>
      <LinkIcon className="h-[30px] w-[30px] rotate-90" />
    </Link>
  );
}

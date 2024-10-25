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
      className="flex items-center group cursor-pointer gap-1"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span className="group-hover:underline font-CourierPrime group-hover:font-bold mt-1">
        {text}
      </span>
      <LinkIcon className="rotate-90 h-[30px] w-[30px]" />
    </Link>
  );
}

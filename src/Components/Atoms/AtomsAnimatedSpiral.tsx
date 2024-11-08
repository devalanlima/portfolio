import { useRef, useEffect } from 'react';

export default function AtomsAnimatedSpiral() {
  const delay = 1;
  const circleNumbers = 20;
  const $container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if ($container.current) {
      const allCircles = Array.from(
        $container.current.children
      ) as HTMLElement[];
      allCircles.forEach((element, index) => {
        element.style.animationDelay = `${delay * index}s`;
      });
    }
  }, []);

  return (
    <div
      className="absolute grid h-full place-items-center overflow-hidden opacity-0 md:relative md:opacity-100"
      ref={$container}
    >
      {Array.from({ length: circleNumbers }, (_, index) => (
        <div
          key={index}
          className={`animate-spiral-animation border-preto absolute aspect-square h-[150%] rounded-full border-[20px] border-primary`}
        ></div>
      ))}
    </div>
  );
}

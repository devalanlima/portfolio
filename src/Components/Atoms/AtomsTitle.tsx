interface Props {
  smallText: string;
  bigText: string;
}

export default function AtomsTitle({ smallText, bigText }: Props) {
  return (
    <h2 className="my-1 flex flex-col text-primary">
      <span className="font-CourierPrime text-[1.09rem] leading-[17px] sm:text-[1.64rem] sm:leading-[27px]">
        {smallText}
      </span>
      <span className="md-text-5xl whitespace-nowrap font-DelaGothicOne text-3xl leading-[17px] sm:text-[2.8rem] sm:leading-[27px]">
        {bigText}
      </span>
    </h2>
  );
}

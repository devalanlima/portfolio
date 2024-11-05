interface Props {
  smallText: string;
  bigText: string;
}

export default function AtomsHeader({ smallText, bigText }: Props) {
  return (
    <h2 className="my-1 flex flex-col text-primary">
      <span className="font-CourierPrime text-lg leading-[17px]">
        {smallText}
      </span>
      <span className="font-DelaGothicOne text-3xl leading-[17px]">
        {bigText}
      </span>
    </h2>
  );
}

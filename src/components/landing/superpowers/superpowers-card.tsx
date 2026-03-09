import { CardNewBadge } from "./card-new-badge";
import { CardPlusButton } from "./card-plus-button";

export type CardData = {
  title: string;
  image: string;
  isNew?: boolean;
};

export function SuperpowersCard({ title, image, isNew }: CardData) {
  return (
    <div className="snap-center w-[291px] md:w-[320px] h-[410px] md:h-[430px] flex-shrink-0 rounded-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
      <div
        className="block w-full h-full flex flex-col bg-cover bg-center bg-no-repeat cursor-pointer"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="relative z-10 flex flex-col h-full p-6 justify-between">
          <div>
            {isNew && <CardNewBadge />}
            <h3 className="text-white text-3xl leading-tight max-w-[90%] drop-shadow-md">{title}</h3>
          </div>
          <div className="self-end">
            <CardPlusButton />
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaPlay } from "react-icons/fa6";
import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { startUse } from "../../../utils/functions";

export function Hero() {
  const handleClick = () => {
    window.open(
      "https://youtube.com/@sergestoficial1640?si=z22ZmasRfQ5LV9Wy",
      "_blank"
    );
  };
  return (
    <div className="flex h-[400px]">
      <div className="w-6/12 grid text-start">
        <div className="my-auto">
          <h1 className="text-7xl mt-10 text-grayser font-bold">
            Software de <ColoredText>Faturação</ColoredText> online
          </h1>
          <br />
          <p className="w-6/12 text-lg">
            Factura pelo computador, tablet ou telemóvel a qualquer hora.
          </p>
          <br />
          <div className="flex gap-3">
            <ButtonSecondary click={startUse}>Começar a usar</ButtonSecondary>
            <button
              onClick={handleClick}
              className="bg border-2 flex gap-2 border-red-500 text-red-500 font-bold rounded-md  px-4"
            >
              <span className="my-auto">Como usar</span>{" "}
              <FaPlay className="my-auto" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-6/12 grid relative">
        <Overlay />
        <img src={bgs.bg_hero} className="my-auto" alt="" />
      </div>
    </div>
  );
}

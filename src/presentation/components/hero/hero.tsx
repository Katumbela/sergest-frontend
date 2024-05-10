import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function Hero() {
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
          <ButtonSecondary>Começar a usar</ButtonSecondary>
        </div>
      </div>
      <div className="w-6/12 grid relative">
        <Overlay />
        <img src={bgs.bg_hero} className="my-auto" alt="" />
      </div>
    </div>
  );
}

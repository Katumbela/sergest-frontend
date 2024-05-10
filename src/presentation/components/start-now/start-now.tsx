import { bgs } from "../../../utils";
import { Button } from "../button/button";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function StartNow() {
  return (
    <div className=" mx-auto  grid items-center mt-[45rem]  pt-[6rem]">
      <div className="flex xl:ps-[200px] ">
        <div className="w-8/12 items-center grid">
          <div className="text-start my-auto px-14">
            <h1 className="text-5xl font-bold  ">
              Com um <ColoredText>clique</ColoredText> apenas comece a usar
              <ColoredText>agora</ColoredText> mesmo!
            </h1>
            <br />
            <p className="text-white">
              Não perca mais tempo comece agora mesmo a sua jornada para o
              futuro com a Sargest.
            </p>
            <Button>Começar a usar</Button>
          </div>
        </div>
        <div className="w-full text-end relative flex justify-end">
          <Overlay />
          <img src={bgs.bg_start} className=" md:w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
}

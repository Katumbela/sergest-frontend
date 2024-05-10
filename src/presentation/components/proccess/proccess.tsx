import { circles, screens } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";

export function Proccess() {
  return (
    <div
      id="functionalities"
      className="md:mt-[8rem] mb-[14rem] 2xl:mt-[10rem]"
    >
      <div className="text-center relative mt-[6rem] mb-20">
        <img
          src={circles.circle_2}
          className="top-0 left-0 right-0 bottom-0 -z-10 2xl:w-[60%] md:w-[70%] mx-auto absolute "
          alt=""
        />{" "}
        <img
          src={circles.circle_2}
          className="top-0 animate-ping left-0 right-0 bottom-0 -z-10 2xl:w-[60%] md:w-[70%] mx-auto absolute "
          alt=""
        />
        <div className="grid grid-cols-3 gap-5">
          <div>
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Facturação</ColoredText>
            </h1>
            <h1 className="font-bold text-4xl text-grayser">no telemóvel</h1>
            <img
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <img
              src={screens.screen_proccess_1}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
          <div className="md:pt-[10rem] 2xl:pt-[14rem]">
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Cliente</ColoredText>
            </h1>
            <h1 className="font-bold text-4xl text-grayser">conta corrente</h1>
            <img
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <img
              src={screens.screen_proccess_2}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Cliente</ColoredText>
            </h1>
            <h1 className="font-bold text-4xl text-grayser">selecionar</h1>
            <img
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <img
              src={screens.screen_proccess_3}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaPlay } from "react-icons/fa6";
import { screens } from "../../../utils";
import { handleClick } from "../../../utils/functions";
import { ButtonSecondary } from "../button-secondary/button-secondary";

export function SubHero() {
  return (
    <div className="relative">
      <img
        src={screens.screen_dash}
        className="absolute bottom-[-3rem] shadow-2xl -rotate-6 left-[5%] border-[8px] rounded-xl border-primary w-[13rem] z-50"
        alt=""
      />

      <img
        src={screens.screen_login}
        className="absolute w-[12rem] bottom-[-8rem]  border-[8px] rounded-xl rotate-6 shadow-2xl border-primary left-[20%] z-10"
        alt=""
      />
      <div className="flex clip mt-[6rem] rounded-2xl gradient-sergest h-[450px]">
        <div className="w-6/12  ">
          <div className=" "></div>
        </div>
        <div className="w-6/12 text-start my-auto">
          <div className="px-20">
            <h1 className="text-white font-semibold text-2xl">
              Sem preocupações onde estiver estamos também.
            </h1>
            <br />
            <p className="text-white font-sm">
              Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
              gama de serviços que você pode acessar confortavelmente de onde
              estiver, através da nossa plataforma.
            </p>
            <br />
            <div className="flex gap-4">
              <ButtonSecondary>Começar a usar</ButtonSecondary>
              <button
                onClick={handleClick}
                className="bg border-2 flex gap-2 border-white text-white font-bold rounded-md  px-4"
              >
                <span className="my-auto">Como usar</span>{" "}
                <FaPlay className="my-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

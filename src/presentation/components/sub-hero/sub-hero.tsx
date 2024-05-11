import { FaPlay } from "react-icons/fa6";
import { screens } from "../../../utils";
import { handleClick, startUse } from "../../../utils/functions";
import { ButtonSecondary } from "../button-secondary/button-secondary";

export function SubHero() {
  return (
    <div className="relative">
      <img
        src={screens.screen_dash}
        className="absolute bottom-[-18rem] sm:bottom-[-3rem] shadow-2xl -rotate-6 left-[5%] border-[8px] rounded-xl border-primary w-[13rem] z-10"
        alt=""
      />

      <img
        src={screens.screen_login}
        className="absolute w-[12rem] bottom-[-22rem] sm:bottom-[-8rem]  border-[8px] rounded-xl rotate-6 shadow-2xl border-primary left-[42%] sm:left-[20%] z-10"
        alt=""
      />

      <div className="flex clip mt-[100px] mt-t md:mt-[-4.5rem]   lg:mt-[4rem] rounded-[30px] sm:rounded-[65px] gradient-sergest h-[410px] lg:h-[450px]">
        <div className="sm:w-6/12  "></div>
        <div className="lg:w-6/12 sm:w-8/12 sm:text-start mt-6 sm:mt-[4rem] lg:my-auto">
          <div className="sm:pe-6 text-center sm:text-start lg:px-20">
            <h1 className="text-white text-xl px-4 font-semibold sm:text-3xl">
              Sem preocupações, onde estiveres estamos também.
            </h1>
            <p className="text-white mt-2 sm:mt-8 text-xs w-10/12 mx-auto sm:mx-0 sm:w-auto sm:text-sm sm:ps-14 lg:ps-0 lg:text-md 2xl:text-lg">
              Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
              gama de serviços que você pode acessar confortavelmente de onde
              estiver, através da nossa plataforma.
            </p>
            <br />
            <div className="flex justify-center  w-full sm:justify-end sm:pe-6 lg:pe-0 lg:justify-start gap-4">
              <ButtonSecondary click={startUse}>Começar a usar</ButtonSecondary>
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

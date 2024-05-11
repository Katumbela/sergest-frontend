import { FaEnvelope } from "react-icons/fa6";
import { ColoredText } from "../colored-text/colored-text";
import { Button } from "../button/button";
import { circles } from "../../../utils";

export function Newsletter() {
  return (
    <div>
      <div className="text-center relative -mt-[8rem] sm:-mt-[6rem] lg:mt-[6rem] mb-20">
        <div className="absolute -z-20 md:w-[80%] 2xl:w-[85%] 2xl:-right-[62rem] md:-right-[38rem]  md:-bottom-[25rem] 2xl:-bottom-[26rem]">
          <img
            src={circles.circle_2}
            className=" opacity-[.4] sm:opacity-[1] md:w-[50%] 2xl:w-[50%] "
            alt=""
          />
        </div>
        <h1 className="sm:text-5xl text-3xl text-grayser 2xl:text-6xl mx-auto  lg:w-7/12  2xl:w-8/12 font-bold">
          Para ficar sempre informado ative a nossa{" "}
          <ColoredText>Newsletter</ColoredText>!
        </h1>
        <p className="lg:w-4/12 sm:w-8/12  2xl:w-4/12 mx-auto mt-6 lg:mt-10">
          Adicione o seu email e receba todas as novidades sobre a plataforma em
          primeira mão.
        </p>
        <br />
        <br />
        <div className="flex sm:flex-row flex-col gap-4 justify-center ">
          <div className="flex gap-4 lg:w-3/12 sm:w-6/12 sm:bg-gray-200/40 bg-gray-100 focus-within:border-primary px-4 py-1 rounded-md border ">
            <FaEnvelope className="my-auto text-primary" />
            <input
              type="text"
              className="my-auto w-full  py-2 bg-transparent outline-none border-none"
              placeholder="Digite o seu email"
            />
          </div>
          <Button className="mx-[4rem] sm:mx-0">Ativar Newsletter</Button>
        </div>
      </div>
    </div>
  );
}

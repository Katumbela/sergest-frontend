import { FaPlay } from "react-icons/fa6";
import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { startUse } from "../../../utils/functions";
//import { useState, useEffect } from "react";

export function Hero() {
  const handleClick = () => {
    window.open(
      "https://youtube.com/@sergestoficial1640?si=z22ZmasRfQ5LV9Wy",
      "_blank"
    );
  };

  /*
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
*/
  return (
    <div className="flex flex-col md:flex-row mt-[3rem] -z-10 sm:-mt-8 lg:mt-20 2xl:mt-[3rem] h-[400px]">
      <div className="lg:w-6/12 md:w-8/12 grid text-start">
        <div className="my-auto text-center md:text-start">
          <h1 className="lg:text-7xl resp-h1 md:text-5xl text-4xl w-11/12 mx-auto md:mx-0 md:w-full lg:mt-10 text-grayser font-bold">
            Software de <ColoredText>Faturação</ColoredText> online
          </h1>
          <p className="mt-[1rem] text-lg font-bold  lg:mt-[.6rem]">
            Certificado pela AGT Nº <span className="undelrine">310</span>
          </p>
          <p className="   md:w-10/12 md:text-sm 2xl:text-lg">
            Factura pelo computador, tablet ou telemóvel a qualquer hora. Teste
            o SERGEST{" "}
            <span className="color-text font-bold text-underline">
              gratuitamente
            </span>{" "}
            durante
            <span className="font-bold"> 15 dias</span>.
          </p>
          <div className="flex justify-center md:justify-start mt-[1.5rem] gap-3 md:mt-[.8rem] lg:mt-[1rem]">
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
      <div className="lg:w-6/12 md:w-6/12 -z-10 grid relative">
        <Overlay />
        <img
          src={bgs.bg_hero}
          className="md:my-auto mt-6 -z-10 w-full"
          alt=""
        />
      </div>
    </div>
  );
}

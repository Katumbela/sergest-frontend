import { motion } from "framer-motion";
import { bgs, circles } from "../../../utils";
import { Button } from "../button/button";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { handleClick, startUse } from "../../../utils/functions";
import { FaPlay } from "react-icons/fa6";

export function StartNow() {
  return (
    <div className=" mx-auto  grid items-center lg:mt-[45rem] mt-[140rem] sm:mt-[68rem] pt-[6rem]">
      <div className="flex flex-col md:flex-row  2xl:ps-[200px] ">
        <div className="lg:w-8/12  items-center grid">
          <div className="text-start relative my-auto px-6 sm:ps-14 2xl:px-14">
            <img
              src={circles.circle_2_line}
              className="absolute -z-10 md:w-[80%] 2xl:w-[90%] 2xl:-left-[20rem] md:-left-[10rem]  md:-bottom-[22rem] 2xl:-bottom-[35rem]"
              alt=""
            />
            <h1 className="sm:text-3xl text-3xl -mt-1 sm:-mt-12 lg:-mt-[5rem] lg:text-5xl font-bold  ">
              Com um <ColoredText>clique</ColoredText> apenas comece a usar
              <ColoredText> agora</ColoredText> mesmo!
            </h1> 
            <p className="text-grayser sm:my-[.5rem] my-[1rem]">
              Não perca mais tempo comece agora mesmo a sua jornada para o
              futuro com a Sargest.
            </p>

            <div className="flex gap-4">
              <Button click={startUse}>Começar a usar</Button>
              <button
                onClick={handleClick}
                className="bg border-2 flex gap-2 border-red-600 text-red-600 font-bold rounded-md  px-4"
              >
                <span className="my-auto">Como usar</span>{" "}
                <FaPlay className="my-auto" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-end relative flex justify-end">
          <Overlay />
          <motion.img
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            src={bgs.bg_start}
            className=" md:w-[100%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

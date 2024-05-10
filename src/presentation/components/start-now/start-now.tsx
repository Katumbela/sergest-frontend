import { motion } from "framer-motion";
import { bgs, circles } from "../../../utils";
import { Button } from "../button/button";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function StartNow() {
  return (
    <div className=" mx-auto  grid items-center mt-[45rem]  pt-[6rem]">
      <div className="flex 2xl:ps-[200px] ">
        <div className="w-8/12  items-center grid">
          <div className="text-start relative my-auto ps-14 2xl:px-14"> 
            <img
              src={circles.circle_2_line}
              className="absolute -z-10 md:w-[80%] 2xl:w-[90%] 2xl:-left-[20rem] md:-left-[10rem]  md:-bottom-[22rem] 2xl:-bottom-[35rem]"
              alt=""
            />
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

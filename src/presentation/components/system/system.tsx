import { motion } from "framer-motion";
import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { Overlay } from "../overlay/overlay";

export function SystemComponent() {
  return (
    <div className="gradient-sergest mx-auto z-500 grid items-center mt-[14rem]  pt-[6rem]">
      <div className="flex container">
        <div className="w-6/12 items-center grid">
          <div className="text-start md:-mt-10 px-14">
            <h1 className="text-5xl font-bold text-white ">
              O sistema ideal para a sua empresa!
            </h1>
            <br />
            <p className="text-white">
              Tenha todos os controles essenciais do seu negócio num único
              lugar. Entre a partir de qualquer dispositivo.
            </p>
            <br />
            <ButtonSecondary>Começar a usar</ButtonSecondary>
          </div>
        </div>
        <div className="w-6/12 text-end relative flex justify-end">
          <Overlay />
          <motion.img
            initial={{ x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{delay: .2}}
            src={bgs.bg_system}
            className=" md:w-[120%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

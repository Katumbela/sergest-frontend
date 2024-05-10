import { motion } from "framer-motion";
import { screens } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { Overlay } from "../overlay/overlay";

export function PayWith() {
  return (
    <div className="gradient-sergest border-b-[8px] border-primary mx-auto overflow-hidden h-[600px] grid items-center pt-[6rem]">
      <div className="flex container">
        <div className=" w-6/12 items-center grid">
          <div className="text-end my-auto  ">
            <h1 className="text-5xl ms-auto md:w-9/12 2xl:w-6/12 font-bold text-white ">
              Pague com o Express
            </h1>
            <br />
            <p className="text-white md:w-9/12 2xl:w-8/12 ms-auto">
              Não precisas preocupar-te com as filas dos bancos ou nos ATMs
              porque podes fazer os pagamentos diretamente na plataforma usando
              o Express.
            </p>
            <br />
            <ButtonSecondary>Começar a usar</ButtonSecondary>
          </div>
        </div>
        <div className="w-6/12 relative text-end flex justify-end">
          <Overlay />
          <div className="flex gap-8">
            <motion.img
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              src={screens.screen_pay}
              className="absolute bottom-[-9rem] 2xl:bottom-auto rounded-3xl 2xl:left-[3rem] md:left-[2rem] md:w-[15rem] 2xl:w-[17rem]"
              alt=""
            />
            <motion.img
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              src={screens.screen_pay_exp}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="absolute  rounded-3xl  md:left-[19rem] 2xl:left-[24rem]   md:top-[-1.5rem] 2xl:top-[-5rem] md:w-[15rem] 2xl:w-[17rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

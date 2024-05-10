import { motion } from "framer-motion";
import { bgs, circles } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function Founder() {
  return (
    <div className="  mt-[20rem]  pt-[6rem]">
      <div className="flex md:gap-24 ">
        <div className="w-full text-end relative flex justify-start">
          <Overlay />
          <img
            src={circles.circle_3}
            className="absolute -z-10 2xl:-left-[20rem] md:-left-[15rem]  md:-bottom-[8rem] 2xl:-bottom-[12rem]"
            alt=""
          />
          <motion.img
            initial={{ x: -190, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={bgs.bg_founder}
            className="  "
            alt=""
          />
        </div>
        <div className="w-full text-start grid relative  ">
          <div className="my-auto md:px-4">
            <h1 className="md:text-5xl font-bold">
              Sérgio Mateus <ColoredText>Founder</ColoredText> da Sergest
            </h1>
            <br />
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              Sérgio Mateus é um Empreendedor e Inovador em Gestão Empresarial,
              Estrategista de Marketing e BenchMarking.
            </motion.p>
            <br />

            <motion.p
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Apaixonado por simplificar processos e impulsionar negócios,
              Fundador e CEO do SERGEST, vem Transformando a forma como as
              empresas lidam com a faturação.
            </motion.p>
            <br />
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              Sérgio Mateus Formado em Gestão de Empresas, possui uma Base
              sólida para inovar e liderar no mundo dos negócios.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

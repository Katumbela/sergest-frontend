import { motion } from "framer-motion";
import { bgs, circles } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function AboutUs() {
  return (
    <div className="   mx-auto  items-center mt-[12rem]   ">
      <div className="flex gap-8 container">
        <div className="w-6/12 text-end relative flex justify-center">
          <img
            src={circles.circle_2}
            style={{zIndex: '-999999'}}
            className="absolute -z-20 md:w-[80%] 2xl:w-[90%] 2xl:-left-[20rem] md:-left-[8rem]  md:-top-[14rem] 2xl:-top-[20rem]"
            alt=""
          />
          <Overlay />
          <motion.img
            initial={{ opacity: 0.1, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            src={bgs.bg_about}
            className=" md:w-[120%]"
            alt=""
          />
        </div>
        <div className="w-6/12 grid ">
          <div className="my-auto">
            <h1 className="font-bold text-5xl">
              <ColoredText>Sobre</ColoredText> Nós
            </h1>
            <br />
            <br />
            <motion.p
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-grayser"
            >
              A Sergest é um software de gestão e faturação especializado em
              oferecer soluções abrangentes e intuitivas para a otimização de
              processos empresariais, trabalhamos no mercado nacional desde
              2016, atuamos no ramo das Tics, Marca Sergest é propriedade da
              empresa Sermar.
            </motion.p>
            <br />
            <motion.p
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-grayser"
            >
              Decidimos criar o Sergest com intuito de apresentar ao nosso
              mercado que soluções nacionais agregam valor, estabilidade,
              confiabilidade e escalabilidade para as empresas que desejam
              crescer de forma organizada e produtiva, a organização no processo
              de gestão faz o crescimento.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

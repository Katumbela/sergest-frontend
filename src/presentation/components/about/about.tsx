import { bgs } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function AboutUs() {
  return (
    <div className="   mx-auto  items-center mt-[12rem]   ">
      <div className="flex gap-8 container">
        <div className="w-6/12 text-end relative flex justify-center">
          <Overlay />
          <img src={bgs.bg_about} className=" md:w-[120%]" alt="" />
        </div>
        <div className="w-6/12 grid ">
          <div className="my-auto">
            <h1 className="font-bold text-5xl">
              <ColoredText>Sobre</ColoredText> Nós
            </h1>
            <br />
            <br />
            <p className="text-grayser">
              A Sergest é um software de gestão e faturação especializado em
              oferecer soluções abrangentes e intuitivas para a otimização de
              processos empresariais, trabalhamos no mercado nacional desde
              2016, atuamos no ramo das Tics, Marca Sergest é propriedade da
              empresa Sermar.
            </p>
            <br />
            <p className="text-grayser">
              Decidimos criar o Sergest com intuito de apresentar ao nosso
              mercado que soluções nacionais agregam valor, estabilidade,
              confiabilidade e escalabilidade para as empresas que desejam
              crescer de forma organizada e produtiva, a organização no processo
              de gestão faz o crescimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { bgs } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function Founder() {
  return (
    <div className="  mt-[20rem]  pt-[6rem]">
      <div className="flex md:gap-24 ">
        <div className="w-full text-end relative flex justify-start">
          <Overlay />
          <img src={bgs.bg_founder} className="  " alt="" />
        </div>
        <div className="w-full text-start grid relative  ">
          <div className="my-auto md:px-4">
            <h1 className="md:text-5xl font-bold">
              Sérgio Mateus <ColoredText>Founder</ColoredText> da Sergest
            </h1>
            <br />
            <p>
              Sérgio Mateus é um Empreendedor e Inovador em Gestão Empresarial,
              Estrategista de Marketing e BenchMarking.
            </p>
            <br />

            <p>
              Apaixonado por simplificar processos e impulsionar negócios,
              Fundador e CEO do SERGEST, vem Transformando a forma como as
              empresas lidam com a faturação.
            </p>
            <br />
            <p>
              Sérgio Mateus Formado em Gestão de Empresas, possui uma Base
              sólida para inovar e liderar no mundo dos negócios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

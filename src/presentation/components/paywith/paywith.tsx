import { screens } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { Overlay } from "../overlay/overlay";

export function PayWith() {
  return (
    <div className="gradient-sergest mx-auto overflow-hidden h-[600px] grid items-center pt-[6rem]">
      <div className="flex container">
        <div className="w-6/12 items-center grid">
          <div className="text-end my-auto  ">
            <h1 className="text-5xl ms-auto w-6/12 font-bold text-white ">
              Pague com o Express
            </h1>
            <br />
            <p className="text-white md:w-8/12 ms-auto">
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
            <img
              src={screens.screen_pay}
              className="absolute  rounded-3xl left-[3rem] md:w-[17rem]"
              alt=""
            />
            <img
              src={screens.screen_pay_exp}
              className="absolute  rounded-3xl  left-[24rem] top-[-5rem] md:w-[17rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

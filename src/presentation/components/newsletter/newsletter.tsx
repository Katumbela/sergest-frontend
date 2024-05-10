import { FaEnvelope } from "react-icons/fa6";
import { ColoredText } from "../colored-text/colored-text";
import { Button } from "../button/button";

export function Newsletter() {
  return (
    <div>
      <div className="text-center mt-[6rem] mb-20">
        <h1 className="text-5xl text-grayser 2xl:text-6xl mx-auto  md:w-7/12  2xl:w-8/12 font-bold">
          Para ficar sempre informado ative a nossa{" "}
          <ColoredText>Newsletter</ColoredText>!
        </h1>
        <p className="md:w-4/12  2xl:w-4/12 mx-auto mt-10">
          Adicione o seu email e receba todas as novidades sobre a plataforma em
          primeira mão.
        </p>
        <br />
        <br />
        <div className="flex gap-4 justify-center ">
          <div className="flex gap-4 w-3/12 bg-gray-200/40 focus-within:border-primary px-4 py-1 rounded-md border ">
            <FaEnvelope className="my-auto text-primary" />
            <input
              type="text"
              className="my-auto w-full  py-2 bg-transparent outline-none border-none"
              placeholder="Digite o seu email"
            />
          </div>
          <Button className="">Ativar Newsletter</Button>
        </div>
      </div>
    </div>
  );
}

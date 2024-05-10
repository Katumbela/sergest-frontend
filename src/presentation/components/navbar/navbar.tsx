import { FaArrowRight } from "react-icons/fa6";
import { logos } from "../../../utils";
import { Button } from "../button/button";
import { LoginNow } from "../../../utils/functions";

export function NavBar() {
  return (
    <div>
      <div className="flex pb-3 pt-6  justify-between">
        <a href="/">
          <img src={logos.logo} alt="" />
        </a>
        <div className="flex gap-7 my-auto">
          <a href="#" className="text-md font-semibold">
            Início
          </a>
          <a href="#about" className="text-md font-semibold">
            Sobre
          </a>
          <a href="#functionalities" className="text-md font-semibold">
            Funcionalidades
          </a>
          <a href="#prices" className="text-md font-semibold">
            Preços e Planos
          </a>
          <a href="#" className="text-md font-semibold">
            Blog
          </a>
        </div>
        <Button click={LoginNow} className="my-auto flex gap-2">
          Entrar agora <FaArrowRight className="my-auto" />
        </Button>
      </div>
    </div>
  );
}

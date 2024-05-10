import { FaArrowRight } from "react-icons/fa6";
import { logos } from "../../../utils";
import { Button } from "../button/button";

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
          <a href="#" className="text-md font-semibold">
            Sobre
          </a>
          <a href="#" className="text-md font-semibold">
            Funcionalidades
          </a>
          <a href="#" className="text-md font-semibold">
            Preços e Planos
          </a>
        </div>
        <Button className="my-auto flex gap-2">
          Entrar agora <FaArrowRight className="my-auto" />
        </Button>
      </div>
    </div>
  );
}

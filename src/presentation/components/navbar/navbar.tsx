import { FaArrowRight } from "react-icons/fa6";
import { logos } from "../../../utils";
import { Button } from "../button/button";

export function NavBar() {

  const handleClick = () => {
    window.location.href = "https://youtube.com/@sergestoficial1640?si=z22ZmasRfQ5LV9Wy";
  };

  return (
    <div>
      <div className="flex pb-3 pt-6  justify-between">
        <a href="/">
          <img src={logos.logo} alt="" />
        </a>
        <div className="flex gap-7 my-auto">
          <a href="#" className="text-md font-semibold" onClick={handleClick}>
            Início
          </a>
          <a href="#" className="text-md font-semibold" onClick={handleClick}>
            Sobre
          </a>
          <a href="#" className="text-md font-semibold" onClick={handleClick}>
            Funcionalidades
          </a>
          <a href="#" className="text-md font-semibold" onClick={handleClick}>
            Preços e Planos
          </a>
        </div>
        <Button className="my-auto flex gap-2" onClick={handleClick}>
          Entrar agora <FaArrowRight className="my-auto" />
        </Button>
      </div>
    </div>
  );
}

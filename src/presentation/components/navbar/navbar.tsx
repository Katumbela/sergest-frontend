import { logos } from "../../../utils";
import { Button } from "../button/button";
import { LinkTo } from "../link/link";

export function NavBar() {
  return (
    <div>
      <div className="flex pb-3 pt-6  justify-between">
        <a href="/">
          <img src={logos.logo} alt="" />
        </a>
        <div className="flex gap-4 my-auto">
          <LinkTo className="text-md font-semibold" to="#">Início</LinkTo>
          <LinkTo className="text-md font-semibold" to="#">Sobre</LinkTo>
          <LinkTo className="text-md font-semibold" to="#">Funcionalidades</LinkTo>
          <LinkTo className="text-md font-semibold" to="#">Preços e Planos</LinkTo>
        </div>
        <Button className="my-auto">Entra agora</Button>
      </div>
    </div>
  );
}

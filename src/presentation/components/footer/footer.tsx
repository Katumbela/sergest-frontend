import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { logos } from "../../../utils";

export function Footer() {
  return (
    <div className="gradient-sergest border-t-[6px] border-primary py-8 2xl:pt-[7rem] 2xl:pb-[6rem] mt-[10rem]">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-5">
          <div className="w-full col-span-2 md:pe-5">
            {" "}
            <img
              src={logos.logo}
              className="h-[3em] bg-white rounded-lg py-2 px-4 "
              alt=""
            />
            <p className="text-white text-sm mt-4">
              Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
              gama de serviços que você pode acessar confortavelmente de onde
              estiver, através do nosso site ou aplicativo.
            </p>
          </div>
          <div className="text-white">
            <b>Produto</b>
            <br />
            <br />
            <ul className="footer-link">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/">Sobre</a>
              </li>
              <li>
                <a href="/">Funcionalidades</a>
              </li>
              <li>
                <a href="/">Preços & Planos</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <b>Info & Serviços</b>
            <br />
            <br />
            <p className="text-xs">
              Localização: Avenida Deolinda Rodrigues, sentido primeiro de maio,
              ao lado oposto ao catetão do petro, EDF 25, rés do chão
              apartamento 2.
            </p>
            <br />
            <ul className="footer-link">
              <li>
                <a href="/" className="flex gap-2">
                  <FaPhone className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto"> +244 944 836 119</span>
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-2">
                  <FaPhone className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto"> +244 923 395 846</span>
                </a>
              </li>
              <li>
                <a href="mailto:comercial@sergest.com" className="flex gap-2">
                  <FaEnvelope className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto">
                    {" "}
                    comercial@sergest.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <b>Acompanhe nossas redes sociais</b>
            <br />
            <br />
            <ul className="flex gap-6">
              <li>
                <a href="/">
                  <FaFacebook className="text-3xl" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaLinkedin className="text-3xl" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram className="text-3xl" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaYoutube className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10" />
        <center>
          <span className="text-white text-sm">
            © SERGEST 2024 - Todos os direitos reservados | Política de
            Privacidade
          </span>
        </center>
      </div>
    </div>
  );
}

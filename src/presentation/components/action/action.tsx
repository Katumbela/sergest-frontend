import { logos } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function Action() {
  return (
    <div className=" mt-[15rem] h-[400px]">
      <div className="text-center">
        <h1 className="text-[56px] font-bold">
          Três Palavras & uma <ColoredText>Plataforma</ColoredText>{" "}
        </h1>
        <p className="w-3/12 mx-auto">
          Factura pelo computador, tablet ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="cards">
        <div className="grid gap-8 grid-cols-3">
          <div className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border rounded-xl shadow-xl py-8 px-6">
            <div className="flex gap-6 relative">
              <Overlay />
              <img src={logos.logo_lamp} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold">Fácil</h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-grayser">
                Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
                gama de serviços que você pode acessar confortavelmente de onde
                estiver, através do nosso site ou aplicativo.
              </p>
            </div>
          </div>
          <div className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border gradient-sergest rounded-xl shadow-xl py-8 px-6">
            <div className="flex gap-6 relative">
              <Overlay />
              <img src={logos.logo_shield} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold">Segura</h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-grayser">
                Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
                gama de serviços que você pode acessar confortavelmente de onde
                estiver, através do nosso site ou aplicativo.
              </p>
            </div>
          </div>
          <div className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border rounded-xl shadow-xl py-8 px-6">
            <div className="flex gap-6 relative">
              <Overlay />
              <img src={logos.logo_angola} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold">Angolano</h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-grayser">
                Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
                gama de serviços que você pode acessar confortavelmente de onde
                estiver, através do nosso site ou aplicativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

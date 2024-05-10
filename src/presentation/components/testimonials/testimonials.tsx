import { ColoredText } from "../colored-text/colored-text";
import { testimonials_dummy } from "../../../infra/ddummies";
import { Cardtestimonial } from "../card-testimonial/card-testimonial";
import { Button } from "../button/button";

export function Testimonials() {
  return (
    <div className=" mt-[15rem] h-[400px]">
      <div className="text-center">
        <h1 className="text-[56px] lg:w-8/12 mx-auto font-bold">
          A vida dessas <ColoredText>pessoas</ColoredText> já não é a mesma!
        </h1>
        <p className="w-3/12 mx-auto">
          Factura pelo computador, tablete ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="cards">
        <div className="grid gap-8 grid-cols-3">
          {testimonials_dummy.map((test) => (
            <Cardtestimonial
              desc={test.desc}
              nome={test.nome}
              pic={test.pic}
              key={test.id}
            />
          ))}
        </div>

        <br />
        <br />
        <br />
        <center>
          <Button className="mx-auto ">Mostrar mais</Button>
        </center>

        <br />
        <br />
      </div>
    </div>
  );
}

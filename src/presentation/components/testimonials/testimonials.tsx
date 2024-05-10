import { ColoredText } from "../colored-text/colored-text";
import { testimonials_dummy } from "../../../infra/ddummies";
import { Cardtestimonial } from "../card-testimonial/card-testimonial";
import { Button } from "../button/button";
import { circles } from "../../../utils";

export function Testimonials() {
  return (
    <div className=" 2xl:mt-[15rem] relative mt-[5rem] h-[400px]">
      <div className="absolute -z-20 md:w-[80%] 2xl:w-[85%] 2xl:-right-[50rem] md:-right-[35rem]  md:-bottom-[4rem] 2xl:-bottom-[6rem]">
        <img
          src={circles.circle_2}
          className=" md:w-[50%] 2xl:w-[50%] "
          alt=""
        />
      </div>

      <div className="text-center">
        <h1 className="text-[56px] lg:w-8/12 mx-auto font-bold">
          A vida dessas <ColoredText>pessoas</ColoredText> já não é a mesma!
        </h1>
        <p className="2xl:w-3/12 md:w-5/12 mt-[1rem] text-xl mx-auto">
          Factura pelo computador, tablete ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br />

      <div className="cards z-10 2xl:mt-[2rem]">
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

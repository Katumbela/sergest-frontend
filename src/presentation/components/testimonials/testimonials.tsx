import { ColoredText } from "../colored-text/colored-text";
import { testimonials_dummy } from "../../../infra/ddummies";
import { Cardtestimonial } from "../card-testimonial/card-testimonial";
import { Button } from "../button/button";
import { circles } from "../../../utils";
import { motion } from "framer-motion";


export function Testimonials() {
  return (
    <div className=" 2xl:mt-[15rem] relative sm:mt-[5rem] mt-[4rem] h-[400px]">
      <div className="absolute -z-20 md:w-[80%] 2xl:w-[85%] 2xl:-right-[50rem] md:-right-[35rem]  md:-bottom-[4rem] 2xl:-bottom-[6rem]">
        <img
          src={circles.circle_2}
          className=" md:w-[50%] 2xl:w-[50%] "
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="sm:text-[56px] text-[35px] leading-none lg:w-8/12 mx-auto font-bold">
          A vida dessas <ColoredText>pessoas</ColoredText> já não é a mesma!
        </h1>
        <p className="2xl:w-3/12 md:w-5/12 text-grayser mt-[1rem] sm:text-xl mx-auto">
          Factura pelo computador, tablet ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br />
      <div className="cards z-10 2xl:mt-[2rem]">
        <div className="grid gap-8 place-content-center mx-auto items-center lg:grid-cols-3 sm:grid-cols-2">
          {testimonials_dummy.map((test) => (
            <motion.div
              initial={{ y: 180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * test.id }} // Correção aqui
              key={test.id}
            >
              <Cardtestimonial
                desc={test.desc}
                nome={test.nome}
                pic={test.pic}
              />
            </motion.div>
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

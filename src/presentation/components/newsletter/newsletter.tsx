import { FaEnvelope } from "react-icons/fa6";
import { ColoredText } from "../colored-text/colored-text";
import { Button } from "../button/button";
import { circles } from "../../../utils";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "axios";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const url = "https://email-api-arotec-lilac.vercel.app/api/enviar-email";
    const dadosEmail = {
      to: "comercial@sergest.com",
      subject: "Novo inscrito na newsletter da Neroo",
      body: `Novo e-mail cadastrado na newsletter Neroo: ${email}`,
      email: "ja3328173@gmail.com",
      password: "pmjh fcjp wmrm fwmy",
      emailFrom: "neroo-newsletter@gokside.site",
      key: "Angola2020*",
    };

    try {
      const resposta = await axios.post(url, dadosEmail, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Email enviado com sucesso!", resposta);
      setEmail('')
      setSent(true);
      setLoading(false);
    } catch (erro: unknown) {
      console.error("Erro ao enviar email:", erro);

      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center relative -mt-[8rem] sm:-mt-[6rem] lg:mt-[6rem] mb-20">
        <div className="absolute -z-20 md:w-[80%] 2xl:w-[85%] 2xl:-right-[62rem] md:-right-[38rem]  md:-bottom-[25rem] 2xl:-bottom-[26rem]">
          <img
            src={circles.circle_2}
            className=" opacity-[.4] sm:opacity-[1] md:w-[50%] 2xl:w-[50%] "
            alt=""
          />
        </div>
        <h1 className="sm:text-5xl text-3xl text-grayser 2xl:text-6xl mx-auto  lg:w-7/12  2xl:w-8/12 font-bold">
          Para ficar sempre informado ative a nossa{" "}
          <ColoredText>Newsletter</ColoredText>!
        </h1>
        <p className="lg:w-4/12 sm:w-8/12  2xl:w-4/12 mx-auto mt-6 lg:mt-10">
          Adicione o seu email e receba todas as novidades sobre a plataforma em
          primeira mão.
        </p>
        <br />
        <br />
        <div className="flex sm:flex-row flex-col gap-4 justify-center ">
          <div className="flex gap-4 lg:w-3/12 sm:w-6/12 sm:bg-gray-200/40 bg-gray-100 focus-within:border-primary px-4 py-1 rounded-md border ">
            <FaEnvelope className="my-auto text-primary" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="my-auto w-full  py-2 bg-transparent outline-none border-none"
              placeholder="Digite o seu email"
            />
          </div>
          <Button
            click={handleSubmit}
            disabled={loading}
            className="mx-[4rem] sm:mx-0"
          >
            {loading ? (
              <CgSpinner className="text-2xl text-white animate-spin animate" />
            ) : (
              <>
                <span className="hidden md:flex">Ativar Newsletter</span>
                <span className="text-xl text-white md:hidden">
                  <BsSend />
                </span>
              </>
            )}
          </Button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {sent && (
          <>
            <div className="relative p-4 mx-auto text-sm text-secondary bg-primary/30 border text-center border-secondary rounded-lg md:text-xl md:w-5/12 2xl:text-xl">
              <span
                onClick={() => setSent(false)}
                className="absolute top-0 text-2xl cursor-pointer right-2"
              >
                &times;
              </span>
              Seu email foi adicionado com sucesso na nossa Newsletter
            </div>
          </>
        )} 
      </motion.div>
    </div>
  );
}

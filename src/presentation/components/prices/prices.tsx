import { FaArrowRight } from "react-icons/fa6";
import { plans_dummies } from "../../../infra/plans_dummies";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { LoginNow } from "../../../utils/functions";

export function Prices() {
  return (
    <div id="prices" className=" h-[400px]">
      <div className="text-center">
        <h1 className="sm:text-[56px] text-[30px] leading-none font-bold">
          Preços & Planos da <ColoredText>Plataforma !</ColoredText>{" "}
        </h1>
        <p className="lg:w-3/12 lg:text-lg sm:w-6/12 text-grayser mt-4 mx-auto">
          Factura pelo computador, tablet ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br /> 
      <div className="cards">
        <div className="grid mt-[1rem] lg:mt-[3rem] lg:gap-8 gap-6  lg:grid-cols-3 sm:grid-cols-2">
          {plans_dummies.map((plan) => (
            <div
              key={plan.id}
              className={`card ${
                plan.id == 2 ?
                "gradient-sergest shadow-2xl lg:shadow-primary text-white" : 'hover:bg-primary/5'
              }  transition-all hover:-translate-y-2 border rounded-xl shadow-xl py-8 px-6`}
            >
              <div className="flex gap-6 relative">
                <Overlay />
                <img src={plan.logo} className="w-[4em]" alt="" />
                <h1 className={`sm:text-3xl text-2xl  my-auto font-bold`}>{plan.plan}</h1>
              </div>
              <p
                className={`text-sm sm:text-lg mt-4 ${
                  plan.id == 2 ? "  text-white" : "text-grayser"
                } `}
              >
                {plan.desc}
              </p>
              <div className="mt-4 text-start">
                <b className="text-secondary">Benefícios</b>
                <br />
                <p className="text-sm sm:text-md lg:text-lg  ">{plan.benefits}</p>
                <br />
                <b className="text-secondary">{plan.invest}</b>
                <br />

                {plan.id != 2 ? (
                  <>
                    <br />
                    <ColoredText className={`text-5xl font-bold mt-2`}>
                      {" "}
                      {plan.price}
                    </ColoredText>
                    <br />
                  </>
                ) : (
                  <h1 className={`text-5xl font-bold mt-2`}>{plan.price}</h1>
                )}

                <br />
                <button
                  onClick={LoginNow}
                  className={`border-2 ${
                    plan.id !== 2 ? "bg-primary border-primary" : ""
                  } py-4 click px-6 rounded-md font-semibold text-white`}
                >
                  {plan.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <button className="click flex gap-3 mx-auto bg-secondary py-3 px-9 rounded-lg text-white font-bold">
          <span className="my-auto">Blog</span>
          <FaArrowRight className="my-auto " />
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

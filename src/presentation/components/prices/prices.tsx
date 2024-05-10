import { FaArrowRight } from "react-icons/fa6";
import { plans_dummies } from "../../../infra/plans_dummies";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";

export function Prices() {
  return (
    <div id="prices" className=" h-[400px]">
      <div className="text-center">
        <h1 className="text-[56px] font-bold">
          Preços & Planos da <ColoredText>Plataforma !</ColoredText>{" "}
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
          {plans_dummies.map((plan) => (
            <div
              key={plan.id}
              className={`card ${
                plan.id == 2 &&
                "gradient-sergest shadow-2xl shadow-primary text-white"
              }  transition-all hover:-translate-y-2 border rounded-xl shadow-xl py-8 px-6`}
            >
              <div className="flex gap-6 relative">
                <Overlay />
                <img src={plan.logo} className="w-[4em]" alt="" />
                <h1 className={`text-3xl my-auto font-bold`}>{plan.plan}</h1>
              </div>
              <p
                className={` mt-4 ${
                  plan.id == 2 ? "  text-white" : "text-grayser"
                } `}
              >
                {plan.desc}
              </p>
              <div className="mt-4 text-start">
                <b className="text-secondary">Benefícios</b>
                <br />
                <p className=" ">{plan.benefits}</p>
                <br />
                <b className="text-secondary">{plan.invest}</b>
                <br />
                <br />
                <button
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

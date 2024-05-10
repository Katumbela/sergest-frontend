import { FaStar } from "react-icons/fa6";
import { Overlay } from "../overlay/overlay";

interface CTProps {
  pic: string;
  nome: string;
  desc: string;
}

export function Cardtestimonial({ nome, desc, pic }: CTProps) {
  return (
    <div className="   transition-all hover:border-gray-200 border border-white  rounded-xl shadow-xl py-14 px-6">
      <div className="text-center gap-6 relative">
        <Overlay />
        <img
          src={pic}
          className="w-[4em] border-2 border-primary rounded-full mx-auto"
          alt=""
        />
        <h1 className="text-2xl my-auto text-grayser font-bold">{nome}</h1>
      </div>
      <div className="mt-4 text-center">
        <p className="text-grayser">{desc}</p>
        <br />
        <div className="flex justify-center gap-4">
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

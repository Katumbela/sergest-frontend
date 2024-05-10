import { bgs } from "../../../utils";
import { Overlay } from "../overlay/overlay";

export function MockUp() {
  return (
    <div className="w-full relative">
      <Overlay />
      <img src={bgs.bg_mockup} className="w-[60%] mx-auto" alt="" />
    </div>
  );
}

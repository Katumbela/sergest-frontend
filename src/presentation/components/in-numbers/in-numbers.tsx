import { motion } from "framer-motion";
import { logos } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { BsEnvelope } from "react-icons/bs";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type PropVisible = {
  isVisible: boolean;
};

export function InNumbers() {
  return (
    <div className="l">
      <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-[4rem]">
        <ColoredText>Sergest</ColoredText> em números
      </h1>
      <div className="grid gap-4 lg:gap-8 grid-cols-4">
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 190, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="cardd text-center border border-primary/30 bg-white shadow rounded-e-md pb-7 px-6 "
        >
          <div className="mx-auto border-x border-secondaryy bg-primary/30 w-[3.5em] text-center pt-6 rounded-b-full">
            <div className=" rounded-full  bg-white grid items-center place-content-center text-lg py-2 h-[3em] w-[3em] border border-secondaryy px-2    ">
              <BsEnvelope className="text-md text-secondary" />
            </div>
          </div>
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-center mt-2">
            <ColoredText>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: PropVisible) => (
                  <div style={{ height: 40 }}>
                    {isVisible ? (
                      <CountUp duration={7} className="counter" end={12406} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </ColoredText>
          </h1>
          <span className="text-grayser text-xs lg:text-sm">+ SUBSCRIÇÔES</span>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 190, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cardd text-center border border-primary/30 bg-white shadow rounded-e-md pb-7 px-6 "
        >
          <div className="mx-auto border-x border-secondaryy bg-primary/30 w-[3.5em] text-center pt-6 rounded-b-full">
            <div className=" rounded-full  bg-white grid items-center place-content-center text-lg py-2 h-[3em] w-[3em] border border-secondaryy px-2    ">
              <img src={logos.logo_essencial} className="w-[2em]" alt="" />
            </div>
          </div>
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-center mt-2">
            <ColoredText>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: PropVisible) => (
                  <div style={{ height: 40 }}>
                    {isVisible ? (
                      <CountUp duration={14} className="counter" end={812} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </ColoredText>
          </h1>
          <span className="text-grayser text-xs lg:text-sm">
            + PLANO ESSENCIAL
          </span>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 190, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cardd text-center border border-primary/30 bg-white shadow rounded-e-md pb-7 px-6 "
        >
          <div className="mx-auto border-x border-secondaryy bg-primary/30 w-[3.5em] text-center pt-6 rounded-b-full">
            <div className=" rounded-full  bg-white grid items-center place-content-center text-lg py-2 h-[3em] w-[3em] border border-secondaryy px-2    ">
              <img src={logos.logo_essencial} className="w-[2em]" alt="" />
            </div>
          </div>
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-center mt-2">
            <ColoredText>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: PropVisible) => (
                  <div style={{ height: 40 }}>
                    {isVisible ? (
                      <CountUp duration={8} className="counter" end={703} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </ColoredText>
          </h1>
          <span className="text-grayser text-xs lg:text-sm">
            + PLANO AVANÇAO
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 190, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cardd text-center border border-primary/30 bg-white shadow rounded-e-md pb-7 px-6 "
        >
          <div className="mx-auto border-x border-secondaryy bg-primary/30 w-[3.5em] text-center pt-6 rounded-b-full">
            <div className=" rounded-full  bg-white grid items-center place-content-center text-lg py-2 h-[3em] w-[3em] border border-secondaryy px-2    ">
              <img src={logos.logo_expert} className="w-[2em]" alt="" />
            </div>
          </div>
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-center mt-2">
            <ColoredText>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible } : PropVisible) => (
                  <div style={{ height: 40 }}>
                    {isVisible ? (
                      <CountUp duration={9} className="counter" end={1512} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </ColoredText>
          </h1>
          <span className="text-grayser text-xs lg:text-sm">
            + PLANO EXPERT
          </span>
        </motion.div>
      </div>
    </div>
  );
}

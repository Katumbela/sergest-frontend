import { motion } from "framer-motion";
import {
  FaArrowRight,
  
  FaEnvelope,
 
  FaPhone,
} from "react-icons/fa6";
import { logos } from "../../../utils";
import { Button } from "../button/button";
import { LoginNow } from "../../../utils/functions";
import { useState } from "react";
import NumberUtils from "../../../utils/number-utils/number-utils";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Início",
    link: "/",
  },
  {
    id: 1,
    navTitle: "Sobre",
    link: "#about",
  },
  {
    id: 2,
    navTitle: "Funcionalidades",
    link: "#functionalities",
  },
  {
    id: 3,
    navTitle: "Preços & Planos",
    link: "#prices",
  },
  {
    id: 4,
    navTitle: "Blog",
    link: "/",
  },
];

export function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const index = NumberUtils.random(0, 3);
  const initial = [
    { x: "100vw" },
    { x: "-100vw" },
    { y: "-100vh" },
    { y: "100vh" },
  ];
  const animate = [{ x: 0 }, { x: 0 }, { y: 0 }, { y: 0 }];

  return (
    <div className="">
      <motion.div
        initial={initial[index]}
        animate={animate[index]}
        transition={{ duration: 0.8, type: "spring", damping: 13 }}
        className="flex pb-3 pt-6 justify-between"
      >
        <a href="/">
          <img src={logos.logo} alt="" />
        </a>
        <div className="hidden lg:flex gap-7 my-auto">
          <a href="#" className="text-md font-semibold">
            Início
          </a>
          <a href="#about" className="text-md font-semibold">
            Sobre
          </a>
          <a href="#functionalities" className="text-md font-semibold">
            Funcionalidades
          </a>
          <a href="#prices" className="text-md font-semibold">
            Preços e Planos
          </a>
          <a href="#" className="text-md font-semibold">
            Blog
          </a>
        </div>
        <Button click={LoginNow} className="my-auto hidden lg:flex gap-2">
          Entrar agora <FaArrowRight className="my-auto" />
        </Button>
     

        <motion.div
        className="lg:hidden grid items-center py-2 rounded-md click font-seibold text-primary px-5 my-auto border 2 border-primary"
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          Menu
        </motion.div>
      </motion.div>
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="z-50 fixed"
      >
        <motion.div
          variants={mobileMenuVariant}
          className={`${
            mobileNavOpen ? "w-screen" : " "
          } mobile-menu gradient-sergest`}
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            Fechar
          </motion.button>
          <motion.ul variants={ulVariant}>
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  onClick={() => setMobileNavOpen(false)}
                  variants={liVariant}
                >
                  {" "}
                  <a href={navItem.link}>{navItem.navTitle}</a>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInVariant}
            className="contacts flex justify-center mt-[10vh] flex-wrap gap-6"
          >
            <h5>
              <a href="tel:244944836119" className="flex gap-2">
                <FaPhone className="my-auto " />{" "}
                <span className=" my-auto"> +244 944 836 119</span>
              </a>
            </h5>
            <h5>
              <a
                target="__blank"
                href="mailto:comercial@sergest.com"
                className="flex gap-2"
              >
                <FaEnvelope className="my-auto text-sm" />{" "}
                <span className="text-sm my-auto"> comercial@sergest.com</span>
              </a>
            </h5>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

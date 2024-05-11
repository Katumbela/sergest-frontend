
import { users } from "../utils";

interface TDProps {
  id: number; 
  nome: string;
  pic: string;
  desc: string;
}

export const testimonials_dummy: TDProps[] = [
  {
    id: 1,
    nome: "Sergio Mateus",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_1,
  },
  {
    id: 2,
    nome: "Crisvan Van-Dunem",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_2,
  },
  {
    id: 3,
    nome: "Alfredo Luemba",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_ALFREDO,
  },
  {
    id: 4,
    nome: "Maria Mateus",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_MARIA,
  },
  {
    id: 5,
    nome: "Inácio Félix",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_INACIO,
  },
  {
    id: 6,
    nome: "Armando Gomes",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_ARMANDO,
  },
];

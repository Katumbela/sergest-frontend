import { users } from "../utils";

interface TDProps {
  id: number; // Adicionando a propriedade id
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
    nome: "Veto Araujo",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_2,
  },
  {
    id: 4,
    nome: "Marcelo Manuel",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_2,
  },
  {
    id: 5,
    nome: "Ana Maria Ramos",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_2,
  },
  {
    id: 6,
    nome: "Joana Gabriel",
    desc: "Com a nossa plataforma, tudo é mais fácil! Oferecemos uma ampla gama de serviços que você pode acessar confortavelmente de onde estiver.",
    pic: users.user_2,
  },
];

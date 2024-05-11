
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
    nome: "Adilson Manuel",
    desc: "Desde que começamos a usar este software de faturação, nossa empresa viu uma melhoria significativa na precisão e eficiência do processo de faturamento. Altamente recomendado!",
    pic: users.user_ADILSON,
  },
  {
    id: 2,
    nome: "Patrício Vieira",
    desc: "Este software de faturação simplificou nossas operações financeiras, permitindo-nos concentrar mais tempo em outras áreas do nosso negócio. Ótima solução!",
    pic: users.user_PATRICIO,
  },
  {
    id: 3,
    nome: "Alfredo Luemba",
    desc: "Estou impressionado com a facilidade de uso deste software de faturação. Mesmo sem experiência prévia em contabilidade, consegui dominá-lo rapidamente e agora economizo horas no faturamento mensal.",
    pic: users.user_ALFREDO,
  },
  {
    id: 4,
    nome: "Maria Mateus",
    desc: "Como proprietário de uma pequena empresa, encontrar um software de faturação acessível e confiável foi crucial. Este software não só se encaixou no nosso orçamento, mas também superou nossas expectativas em termos de funcionalidade e suporte ao cliente.",
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

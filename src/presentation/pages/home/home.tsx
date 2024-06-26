import { Helmet } from "react-helmet";
import {
  AboutUs,
  Action,
  Footer,
  Founder,
  Hero,
  MockUp,
  NavBar,
  Newsletter,
  PayWith,
  Prices,
  Proccess,
  StartNow,
  SubHero,
  SystemComponent,
  Testimonials,
} from "../../components";
import { Layout, LayoutBody } from "../layout/layout";

export function HomePage() {

  return (
    <>
      <Helmet>
        <title>Pagina Inicial | Sergest - Software de Faturação</title>
       
        <meta property="og:description" content={"Descubra uma solução de faturação online eficiente para o seu negócio. Simplifique sua contabilidade com nosso software de gerenciamento de faturas. Experimente agora!"} />
        
        <meta property="og:url" content={window.location.href} /> 
      </Helmet>
      <Layout>
        <div className="container">
          <NavBar />

          <LayoutBody>
            <Hero />
          </LayoutBody>

          <LayoutBody>
            <SubHero />
          </LayoutBody>

          <LayoutBody>
            <Action />
          </LayoutBody>
        </div>

        <LayoutBody>
          <SystemComponent />
        </LayoutBody>
        <div className="container">
          <AboutUs />

          <LayoutBody>
            <Testimonials />
          </LayoutBody>
        </div>
        <StartNow />
        <div className="container">
          <Prices />
          <Founder />
          <MockUp />
        </div>
        <PayWith />
        <div className="container">
          <Proccess />
          <Newsletter />
        </div>
        <Footer />
      </Layout>
    </>
  );
}

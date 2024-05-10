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
  StartNow,
  SubHero,
  SystemComponent,
  Testimonials,
} from "../../components";
import { LayoutBody } from "../layout/layout";

export function HomePage() {
  return (
    <>
      <div className="container">
        <LayoutBody>
          <NavBar />
        </LayoutBody>

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
        <LayoutBody>
          <AboutUs />
        </LayoutBody>
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
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

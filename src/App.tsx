import "./App.css";
import "./index.css";
import "./theme/global.css";
import { HomePage } from "./presentation/pages";
import { Layout } from "./presentation/pages";

function App() {
  return (
    <>
      <Layout>
        <div className=" ">
          <HomePage />
        </div>
        {/*
         <div className="h-screen grid md:hidden items-center place-content-center">
          <h1 className="text-4xl text-center w-[60%] mx-auto font-bold">
            Ainda não está disponível para este tamanho de tela, extenda o
            tamanho da sua tela ou use um computador{" "}
          </h1>
        </div>
        */}
       
      </Layout>
    </>
  );
}

export default App;

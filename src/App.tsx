import "./App.css";
import "./index.css";
import './theme/global.css'
import { HomePage } from "./presentation/pages";
import { Layout } from "./presentation/pages";

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;

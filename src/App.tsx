import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./theme/global.css";
import { HomePage, NotFound } from "./presentation/pages";

function App() {
  /*
  const redirecionarURL = () => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      window.location.pathname = "/home/";
    }
  };

  useEffect(() => {
    redirecionarURL();
  }, []);
*/

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./theme/global.css";
import { AddBlog, HomePage, BlogPage, NotFound, BlogPostPage } from "./presentation/pages";
import { DeleteBlog } from "./presentation/pages/delete-posts/delete-posts";

export const EDIT_LINK = '/33c06d2a-cb1d-4100-8dee-ba46d075f9a2'

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
        <Route path="/admin-123" element={<AddBlog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path={EDIT_LINK} element={<DeleteBlog />} />
        <Route path="/blogs/:postId" Component={BlogPostPage} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

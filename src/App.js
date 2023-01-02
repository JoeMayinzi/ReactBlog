import { Routes, Route } from "react-router-dom";
import "../src/assets/styles/index.scss";
import Admin from "./components/admin/adminForm/Admin";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import SingleArticle from "./pages/singleArticle/SingleArticle";
import About from "./pages/about/About";
import Services from "./pages/services/Services";


function App() {
  

  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/singleArticle/:id" element={ <SingleArticle></SingleArticle>  }/>
            <Route path="/about" element={<About></About>} />
            <Route path="/services" element={<Services></Services>} />
        </Routes>
    </div>
  );
}

export default App;

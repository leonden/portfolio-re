import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Work from "./components/pages/Work/Work";
import Contact from "./components/pages/Contact/Contact";
import ErrorPage from "./components/pages/Error/ErrorPage";
import Navigation from "./components/Navigation/Navigation";
import Head from "./components/Head/Head";
import Cursor from "./components/Cursor/Cursor";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Head></Head>
      <Cursor></Cursor>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

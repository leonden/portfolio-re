import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/Error/ErrorPage";
import Navigation from "./components/Navigation/Navigation";
import Head from "./components/Head/Head";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Head></Head>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <About></About>
          </Route>
          <Route path="/work" element={<Work />}>
            <Work></Work>
          </Route>
          <Route path="/contact" element={<Contact />}>
            <Contact></Contact>
          </Route>
          <Route path="/*" element={<ErrorPage />}>
            <ErrorPage></ErrorPage>
          </Route>
        </Routes>
      </BrowserRouter>
      <Navigation></Navigation>
    </>
  );
}

export default App;

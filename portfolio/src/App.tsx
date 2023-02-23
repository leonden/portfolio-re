import { useState } from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Head from "./components/Head/Head";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head></Head>
      <Navigation></Navigation>
      <Home></Home>
    </>
  );
}

export default App;

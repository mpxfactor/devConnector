import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Landing/>
    </Fragment>
  );
};

export default App;
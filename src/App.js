import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter, Route, Routes } from "react-router-dom";

import { AppBarCuston } from "./components/navigation/appBar/AppBarCuston";
import { Home } from "./components/navigation/pages/general/Home";
import About from "./components/navigation/pages/general/About";
import Contact from "./components/navigation/pages/general/Contact";
import State from "./components/navigation/pages/react/State";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <AppBarCuston />
        {routes}
      </HashRouter>
    </>
  );
}

export default App;

const routes = (
  <Routes>
    <Route exact="true" path="/" element={<Home />} />
    <Route exact="true" path="/about" element={<About />} />
    <Route exact="true" path="/contact" element={<Contact />} />
    <Route exact="true" path="/state" element={<State />} />
  </Routes>
);

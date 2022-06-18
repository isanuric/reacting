import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter, Route, Routes } from "react-router-dom";

import { AppBarCuston } from "./components/navigation/AppBarCuston";
import { Home } from "./components/menus/general/Home";
import About from "./components/menus/general/About";
import Contact from "./components/menus/general/Contact";
import State from "./components/menus/react/State";

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

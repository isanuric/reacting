import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { AppBarCuston } from "./components/navigation/AppBarCuston";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import State from "./components/menus/react/State";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AppBarCuston />
        {routes}
      </BrowserRouter>
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

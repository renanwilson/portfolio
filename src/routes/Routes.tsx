import { Route, BrowserRouter, Routes } from "react-router-dom";
import { WithDarkThemeProvider } from "../context/DarkThemeContext";
import { Contact } from "../pages/Contacts/Contact";
import { Home } from "../pages/Home/Home";

import { About } from "../pages/About/About";

export const ForRotas = () => {
  return (
    <WithDarkThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/sobre" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </WithDarkThemeProvider>
  );
};

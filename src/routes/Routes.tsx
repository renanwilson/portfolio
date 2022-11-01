import { Route, BrowserRouter, Routes } from "react-router-dom";
import { WithDarkThemeProvider } from "../hocs/WithDarkThemeContext";
import { Contact } from "../pages/Contacts/Contact";
import { Home } from "../pages/Home/Home";

import { Sobre } from "../pages/Sobre/Sobre";

export const ForRotas = () => {
  return (
    <WithDarkThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </WithDarkThemeProvider>
  );
};

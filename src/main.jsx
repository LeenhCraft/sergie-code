import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente";
import { ContadorApp } from "./ContadorApp";
import { ListadoApp } from "./ListadoApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PrimerComponente
      titulo="esta seccion es de prop"
      // subtitulo="subtitulo de props"
      // numero={4}
    /> */}
    {/* <ContadorApp value={0} /> */}
    <ListadoApp />
  </React.StrictMode>
);

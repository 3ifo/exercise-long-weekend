import { useState } from "react";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const listaOrdinata = ["valore1", "valore2", "valore3"];
  const listaNonOrdinata = ["valore4", "valore5", "valore6"];

  return (
    <>
      <CustomList type="ul" list={listaNonOrdinata} />
      <CustomList type="ol" list={listaOrdinata} />
    </>
  );
}

export default App;

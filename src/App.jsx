import { useState } from "react";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const listaOrdinata = ["valore1", "valore2", "valore3"];
  const listaNonOrdinata = ["valore4", "valore5", "valore6"];

  const allLists = [
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Invitati1",
      type: "ol",
      list: ["Sempronio", "Gigio"],
    },
  ];

  return (
    <>
      {allLists.map((elem, i) => {
        return (
          <div>
            <h1>{elem.title}</h1>

            <CustomList type={elem.type} list={elem.list} />
          </div>
        );
      })}
      <CustomList type="ul" list={listaNonOrdinata} />
      <CustomList type="ol" list={listaOrdinata} />
    </>
  );
}

export default App;

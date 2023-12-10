import React, { useState } from "react";
import CustomList from "./components/CustomList";

const App = () => {
  const [allLists, setAllLists] = useState([
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
      buttons: ["Elimina", "Modifica"],
      newItem: "",
    },
  ]);

  return (
    <div>
      {allLists.map((elem, i) => {
        const { newItem } = elem;
        return (
          <div key={i}>
            <h1>{elem.title}</h1>
            <div>
              <input
                value={elem.newItem}
                onChange={(e) => {
                  setAllLists([...allLists]);
                  elem.newItem = e.target.value;
                }}
                type="text"
                name=""
                id=""
              />
              <button
                onClick={() => {
                  setAllLists([...allLists]);
                  elem.list = [...elem.list, newItem];
                  elem.newItem = "";
                }}
              >
                Aggiungi
              </button>
              <CustomList
                type="ul"
                list={elem.list}
                buttons={elem.buttons}
                allLists={allLists}
                setAllLists={setAllLists}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;

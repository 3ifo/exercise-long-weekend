const CustomList = ({ type, list, buttons, allLists, setAllLists }) => {
  if (type === "ul") {
    return (
      <ul>
        {list.map((elemento, indice) => {
          return (
            <li key={indice}>
              {elemento}
              <button onClick={() => setAllLists([newItem, ...allLists])}>
                {buttons[0]}
              </button>
              <button>{buttons[1]}</button>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ol>
        {list.map((elemento, indice) => {
          return (
            <li key={indice}>
              {elemento}
              <button>{buttons}</button>
            </li>
          );
        })}
      </ol>
    );
  }
};

export default CustomList;

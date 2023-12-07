const CustomList = ({ type, list }) => {
  const uList = type === "ul";
  const listItems = list.map((elem, i) => <li key={i}>{elem}</li>);
  return uList ? <ul>{listItems}</ul> : <ol>{listItems}</ol>;
};

export default CustomList;

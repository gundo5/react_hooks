import React, {useState} from "react";


const App = () => {
  // useState 
  // 배열 return 
  // item-현재 상태, setItem-Setter함수
  const [item, setItem] = useState(1); 
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>incr</button>
      <button onClick={decrementItem}>decr</button>
    </div>
  );
};

export default App;

import React, {useState} from "react";

const useInput = (initValue, validator) => {
    // useInput함수에서 이벤트 처리 
  const [value, setValue] = useState(initValue); 
  const onChange = event => {
    //const value = event.target.value;
    const {
      target: {value}
    } = event;

    let willupdate = true;
    if(typeof validator === "function") {
      willupdate = validator(value);
    }
    if(willupdate) {
      setValue(value);
    }
  };   
    return {value, onChange};
};

const App = () => {
  const maxLen = value => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <input placeholder="Name" {...name}  />
    </div>
  );
};

export default App;
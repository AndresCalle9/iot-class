import PropTypes from "prop-types";
import { useState } from "react";

import{Carlos} from './Carlos'

export const CounterApp = ({ value }) => {
  console.log("render");

  // const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(value); // HOOK
  const [name, setName] = useState('Carlos');

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/* <button onClick = {(event) => handleAdd(event)}> +1 </button> */}
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <Carlos name = {name} />
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 100
};

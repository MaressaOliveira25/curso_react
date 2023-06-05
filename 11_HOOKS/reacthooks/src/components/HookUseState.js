import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Margarida";

  const [name, setName] = useState("Jasmim");

  const changeNames = () => {
    userName = "Margarida Florida";

    setName("Jasmim Floral");
  }

  return <div>
    {/*1 - useState */}
    <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes!</button>
    <hr />
  </div>
};

export default HookUseState;

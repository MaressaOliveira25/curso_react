import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Margarida";

  const [name, setName] = useState("Jasmim");

  const changeNames = () => {
    userName = "Margarida Florida";

    setName("Jasmim Floral");
  };
  const [age, setAge] = useState(18);

  // Criando a função handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/*1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      {/*2 - useState e Input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
            type="submit"
            value="Enviar"
        />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;

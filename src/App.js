import React from "react";

class exercicio extends React.Component {
  
  msg = () => {
    return(
      <div>
        <p>Insira uma frase aqui</p>
      </div>
    )
  }

  numero = (numero1) => {
    return (
      <div>
        <p>{numero1*2}</p>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>{this.msg()}</h1>
        <p>{this.numero(18)}</p>
      </div>
    );
  }
}

export default exercicio;

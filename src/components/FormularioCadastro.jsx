import React, { Component } from "react";



class FormularioCadastro extends Component{
    render(){
        return(
            <form>
      <input type="text" placeholder="Título"/>
      <textarea placeholder="Escreva algo!"/>
      <button>Criar nota</button>
    </form>
        );
    }
}


export default FormularioCadastro;
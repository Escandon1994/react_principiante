
import React from "react";

export default class ComponenteDeClase extends React.Component{


    constructor(props){

        super();

        console.log("El componente aun no esta montado")
        this.state={
            contador: 0,
            nombre:"gustaavo"
        }
    }

    componentDidMount(){
        console.log("El componente ya esta montado")

       setInterval(()=>{
        this.setState({
            contador: this.state.contador + 1
        })
       },1000)
    }
render(){

    return(
        <>
        <h1>Hola desde clase</h1>
        <p>Contador ={this.state.contador}</p>
        </>
    )
}

}
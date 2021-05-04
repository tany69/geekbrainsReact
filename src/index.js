import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";


// const mess = 'Hello world!';

//функциональный компонент
const Obj = ({str}) => {
     const messtoadd = 'YesNo.';
     const [value,setValue]= useState(messtoadd); // принимает начальное значение  и записывает значения в  массив через деструктуризацию
     const addPlusToString =() =>{
           return  value;
     };
     const updateValue =() =>{
         let newValue =[].concat(value);
         newValue.push(messtoadd);
          setValue(newValue);
          console.log(newValue);
      };

      return (
         <div>
           <h1>Hello React :{addPlusToString()}</h1>
            <button onClick ={updateValue}>Update</button>
            </div>
     );
};
// классовый компонент
// class Obj extends React.Component{
//      messages={
//           value1: 'Hello!',
//           count :0
//      };
//      state={
//           value:0,
//           count:0
//      }
//      updateValue =() =>{
//           this.setState(prevState =>({value: prevState.value +2}));
//           this.setState(prevState =>({count: prevState.count +1}));
//           // this.setState(()=>({value: this.state.value +1}));
//           // this.setState(()=>({count: this.state.count +1}));
//      };
//      addPlusToString =() =>{
//           return `${this.props.str} +${this.state.value} ---${this.state.count}`;
//      };
//      render(){
//           return(
//               <div>
//                    <h1>HELLO React :{this.addPlusToString()}</h1>
//                    <button onClick={this.updateValue}>Update</button>
//               </div>
//           )
//      }
// }

ReactDOM.render(<Obj  str="  April 2021!  " />, document.getElementById("app"));
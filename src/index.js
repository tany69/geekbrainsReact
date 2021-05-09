import React from "react";
import ReactDOM from "react-dom";
import MessageField from './components/messages/messageField';

// const mess = 'Hello world!';

//функциональный компонент
//LESSON 1
// const Obj = ({str}) => {
//      const messtoadd = 'YesNo.';
//      const [value,setValue]= useState(messtoadd); // принимает начальное значение  и записывает значения в  массив через деструктуризацию
//      const addPlusToString =() =>{
//            return  value;
//      };
//      const updateValue =() =>{
//          let newValue =[].concat(value);
//          newValue.push(messtoadd);
//           setValue(newValue);
//           console.log(newValue);
//       };
//
//       return (
//          <div>
//            <h1>Hello React :{addPlusToString()}</h1>
//             <button onClick ={updateValue}>Update</button>
//             </div>
//      );
// };
//ReactDOM.render(<Obj  str="  April 2021!  " />, document.getElementById("app"));


ReactDOM.render(<MessageField/>, document.getElementById("app"));
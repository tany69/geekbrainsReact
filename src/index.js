import React from "react";
import ReactDOM from "react-dom";
import MessageField from './components/messages/';

// const mess = 'Hello world!';

//�������������� ���������
//LESSON 1
// const Obj = ({str}) => {
//      const messtoadd = 'YesNo.';
//      const [value,setValue]= useState(messtoadd); // ��������� ��������� ��������  � ���������� �������� �  ������ ����� ����������������
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


ReactDOM.render(<Mess />, document.getElementById("app"));
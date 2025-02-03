 import logo from './logo.svg';
 import './App.css';



import React from 'react';
import ListDisplay from './Components/ListDisplay';
import Counter from './Components/Counter';
import Counterf from './Components/Counterf';
import FormComponent from './Components/FormComponent';
import FormFunctionalComponent from './Components/FormFunctionalComponent';
import StudentDetails from './Components/StudentDetails';
import StudentDetails1 from './Components/StudentDetails1';
import Student from './Components/Student';
import FormsValidation from './Components/FormsValidation';
import Hello from './Components/Hello';
import Hello1 from './Components/Hello1';
import Hello2 from './Components/Hello2';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import Fifth from './Components/Fifth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SimpleCounter from './Components/SimpleCounter';
import CompanyList from './Components/CompanyList';
import EmployeeList from './Components/EmployeeList';
import HigherOrderComponent from './Components/HigherOrderComponent';
import Routing from './Components/Routing';

function App() {
  const CompanyData = [
    {
        id: 1,
        name: 'Reliance Industries Limited (RIL)',
        contact:7777777777
          
    },
    {
        id: 2,
        name: 'Infosys Limited',
        contact:7777777778
    },
    {
        id: 3,
        name: 'Larsen and Toubro Limited',
        contact:7777777779
    }
  ];
  const EmployeeData = [
    {
        id: 1,
        name: 'DhiruBhai',
        contact:6666666666
          
    },
    {
        id: 2,
        name: 'N Murthy',
        contact:6666666667
    },
    {
        id: 3,
        name: 'Raghu',
        contact:6666666668
    }
  ];
  const ComapanyDataList = HigherOrderComponent(CompanyList,CompanyData);
    
  const EmployeeDataList = HigherOrderComponent(EmployeeList,EmployeeData);

  const products = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'samsung' },
    { id: 3, name: 'MSLuna' }
  ];
  return (
    <div className="App">
      <ListDisplay/>

    <br></br>
      <Counter/>
      <br></br>
      <Counterf/>
      <br></br>
      <FormComponent/>
      <br></br>
      <FormFunctionalComponent/>
      <br></br>
      <StudentDetails/> 
      <br></br>
      <StudentDetails1/>
      <br></br>
      <Student/>
      <br></br>
      <FormsValidation/>
   <Hello language="english Hindig" />
    <Hello1 language="french" />
    <Hello2 language="spanish" />
    
    
    </div>
  );
}

export default App;


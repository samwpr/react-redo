import './App.css';
import Employee from './components/Employee.js';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmloyees] = useState(
    [
      {name: "Sam", role:"Dev", img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?"},
      {name: "Tam", role:"Admin", img:"https://images.pexels.com/photos/3080717/pexels-photo-3080717.jpeg?"},
      {name: "Jam", role:"Lolster", img:"https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?"},
      {name: "Sam", role:"Dev", img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?"},
      {name: "Tam", role:"Admin", img:"https://images.pexels.com/photos/3080717/pexels-photo-3080717.jpeg?"},
      {name: "Jam", role:"Lolster", img:"https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?"}
    ]
  );
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ?
      <>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee)=>{
            return(<Employee  key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>);
          })}

        </div>
      </>
      : <p>No Access</p> }
    </div>
  );
}

export default App;

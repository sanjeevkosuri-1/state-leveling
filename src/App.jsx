
import { useState } from 'react';
import './App.css';
import First from './components/first'


function App() {

  const [name,setName]=useState('');
  

  return (
    <div>
     <First name={name} setName={setName}/>
    </div>
  
  );
}

export default App;

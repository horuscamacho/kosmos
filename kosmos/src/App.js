import  {useState } from 'react';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import fields from './JSONfile';


function App() {
  const [datos, setDatos] = useState(fields)
  const [input, setInput] = useState([])

  function addItem(e) {
    e.preventDefault()
    const uid = e.target.value
    const newItem = fields.filter(el => el.uid === uid)
    console.log(newItem)
    setInput([...input , newItem[0]])
    setDatos(datos.filter(el => el.uid !== uid))
  }

  function deleteItem(e) {
    e.preventDefault()
    const uid = e.target.value
    let newArr = input.filter(el => el[0].uid !== uid)
    console.log("ESte es el array como quedaría")
    console.log(input)
  }
  console.log("Este es el input", input)
  return (
    <div className="App">
      <Left fields={datos} addItem={addItem} />
      <Right data={input} delItem={deleteItem} />
    </div>
  );
}

export default App;

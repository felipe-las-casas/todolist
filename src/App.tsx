import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState('');

  function handleTask(e: any) {
    setTask(e.target.value);
  }

  function addTask() {
    setList([...list, task]);
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <input type="text" onChange={handleTask} value={task} />
      <button onClick={addTask}>ok</button>
      <ol>
        {
          list.map((e,a) => <li key={a}>{e}</li>)
        }
      </ol>
    </div>
  )
}   

export default App;

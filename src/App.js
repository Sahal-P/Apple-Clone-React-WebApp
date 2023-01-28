import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [toDoTask,setTodoTask] = useState([])
  const [inputTask , setTask]=useState('')
 
  const handleTaskChange=(event)=>{
    setTask(event.target.value)
  }
  return (
    <div className="App ">
      <input className='Appspace' type="text" onChange={handleTaskChange} />
      <Button variant='secondary' onClick={()=>{
        const newtask = [...toDoTask,inputTask]
        setTodoTask(newtask)
      }}>Add Task</Button>
      <div className='App'>
        {inputTask}
        <div>
        <ol>
          {toDoTask.map((task,index)=>{
            return <li key={index}>{task}</li>
          })}
        </ol>
        </div>
      </div>
    </div>
  );
}

export default App;

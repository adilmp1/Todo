import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import Todo from './Todo';
const getLocalItems =   () => {
  let list = localStorage.getItem('lists');
  console.log(list);
  if(list)
  {
      return JSON.parse(localStorage.getItem('lists'));
  }
  else
  {
      return [];
  }
}
function App() {
  const [todos,setTodos] = useState(getLocalItems());
  const [name,setName] = useState()

  useEffect (()=>{
    localStorage.setItem('lists',JSON.stringify(todos))
  },[todos]);

  
  return (
    <div className='main-class'>
      <h2>TODO</h2>
      <div className='todo-box'>
        <div className='add-todo'>
          <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Add TODO here"></input>
          <input onClick={(event)=>{
            event.preventDefault();
            setTodos([...todos,{ id:(new Date).getTime(), TASK:name,completed:false}])
            setName("");
          }} type="button" value="ADD"></input>
        </div>
        {
          todos.map((todo)=>(
          <Todo todoName={todo} todos={todos} setTodos={setTodos}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;

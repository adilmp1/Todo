import './Todo.css'
import { useState,useEffect } from 'react';

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
export default function Todo({todoName,todos,setTodos})
{
    const [color,setColor] = useState('white')
    const [btn,setBtn] = useState('done')
    function removeList(id)
    {
        const newList = todos.filter((todo)=>todo.id!==id);
        setTodos(newList);
    }
    function tickList(id)
    {
        if(color=='white')
        {
            setColor('#7ddb7d')
            setBtn('Undo')
        }
        else
        {
            setColor('white')
            setBtn('done')
        }
    }
    if(todoName.TASK )
    {
        return(
            <div>
                <div className="todo-text" style={{background:color}} >
                    {todoName.TASK}
                    <div style={{background:color}} className='done-delete'>
                        <button onClick={()=>tickList(todoName.id)} className='basic-button'>{btn}</button>
                        <button onClick={()=>removeList(todoName.id)} className='basic-button'>delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
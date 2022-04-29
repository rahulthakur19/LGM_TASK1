import React, { useState } from 'react'
import './App.css'
import Todo from './todo';
function App() {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newText = task;
        setData([...data, newText])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }
    return (
        <div className='container'>
            <nav><h1>Todo App</h1></nav>
            <div className='body'>
            <form onSubmit={submitHandler}>
            <h1>Enter tasks and press enter</h1>
            <input id="todo-input" type="text" value={task} onChange={onChangeHandler} size="32" /> 
            </form>
            <div className='cont4'>
                <table>
           <tr> {data.map((value, index) => {
                        return <Todo
                            key={index}
                            id={index}
                            task={value}
                            onSelect={deleteItem}
                        />
                    })}</tr>
                    </table>
                    </div>
            </div>
        </div>
    )
}

export default App;


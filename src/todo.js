import React from 'react'

function Todo(props) {
    return (
        <div className='container4'>
            <h6>#</h6>
            <h6>{props.task}</h6>
            <button className='but' onClick={()=>{
                    props.onSelect(props.id)
                }}>X</button>
            <hr />
    </div>
    )
}

export default Todo
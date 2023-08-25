import { useState } from "react";

const data = []

function ToDo(){
    const [click, setClick] = useState(0)
    const [toDo, setToDo] = useState("")

    let toDoList = data.map( list => {
       return <li key={list}>{list}</li>
    })

    function handleToDo(event){
        event.preventDefault()
        let itemToDo = event.target.data.value
        setToDo(itemToDo)
        data.push(itemToDo)
    }

    function handleClick(){
        setClick(click + 1)
    }
    
    return (
        <div>
            <button onClick={handleClick}>{click}</button>
            <form onSubmit={handleToDo}>
                <input id="data" type="text" placeholder="Write To Do Items"/>
                <button type="submit">Submit</button>
            </form>
            <ul>{toDoList}</ul>
        </div>
    )
}

export default ToDo

import {useState,useEffect} from "react"


function Todo() {
  const [todo, setTodo]=useState("");
  const [todos, setTodos]=useState([]);
  const onChange=(event)=>{
    setTodo(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    if(todo === ""){
      return;
    }
    setTodos((current)=>[todo, ...current])
    setTodo("");
  }
  
  return (
    <div>
       <h1>todo({todos.length})</h1>
       <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text"/>
        <button>버튼</button>
       </form>
       <hr/>
       <ul>
        {todos.map((item, index)=>(
          <li key={index}>{item}</li>
        )
        )}
       </ul>
    </div>
  );
}

export default Todo;


import React,{useState} from "react";

function AddTodo({addTodo}) {
    const[title,setTitle]=useState('');
    const[desc,setDesc]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }

        addTodo(title,desc);
        setTitle('')
        setDesc("")
    }
  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <div>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input type="text" value={desc} className="form-control" id="desc" onChange={(e)=>{setDesc(e.target.value)}} />
          </div>

          <button type="submit" className="btn btn-success btn-sm">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;

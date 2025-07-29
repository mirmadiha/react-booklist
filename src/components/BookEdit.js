import {useState} from "react";
import useBookContext from "../hooks/use-book-context";

function BookEdit({onSubmit,book}){
    const{editBookById}=useBookContext();
    const[title,setTitle]=useState(book.title);
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit();
        editBookById(book.id,title);
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} className="input"></input>
            <button className="button is-primary">Save</button>
        </form>
        </div>
    )
}

export default BookEdit;
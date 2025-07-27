import BookEdit from './BookEdit'
import {useState} from "react";
function BookShow({book,onDelete,onEdit}){
    const[showEdit,setShowEdit]=useState(false);
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmit=(id,title)=>{
        setShowEdit(!showEdit);
        onEdit(id,title);
    }

    const handleDeleteClick=()=>{
        onDelete(book.id);
    }

    let content=<h3>{book.title}</h3>
    if(showEdit){
       content=<BookEdit onSubmit={handleSubmit} book={book}/> 
    }
    return(
        <div className="book-show">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            {content}
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
            <button className="edit" onClick={handleEditClick}>Edit</button>
        </div> 
    )
};

export default BookShow;
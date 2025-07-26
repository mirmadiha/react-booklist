import BookEdit from './BookEdit'
import {useState} from "react";
function BookShow({book,onDelete,onEdit}){
    const[showEdit,setShowEdit]=useState(false);
const handleEditClick=()=>{
    setShowEdit(!showEdit);
}

    const handleDeleteClick=()=>{
        onDelete(book.id);
    }

    let content=<h3>{book.title}</h3>
    if(showEdit){
       content=<BookEdit/> 
    }
    return(
        <div className="book-show">
            {content}
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
            <button className="edit" onClick={handleEditClick}>Edit</button>
        </div> 
    )
};

export default BookShow;
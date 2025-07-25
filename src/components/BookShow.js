function BookShow({book,onDelete}){
    const handleClick=()=>{
        onDelete(book.id);
    }
    return(
        <div className="book-show">
            {book.title}
            <button className="delete" onClick={handleClick}>Delete</button>
        </div> 
    )
};

export default BookShow;
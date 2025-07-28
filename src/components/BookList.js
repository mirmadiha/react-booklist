import BookShow from './BookShow'
import {useContext} from 'react';
import BookContext from '../context/books'
function BookList({books,onDelete,onEdit}){
    const {count,incrementCount}=useContext(BookContext);//destructuring
    const renderedBooks=books.map((book)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
    });

    return(
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click!</button>
            {renderedBooks}
        </div>
    )
};

export default BookList;
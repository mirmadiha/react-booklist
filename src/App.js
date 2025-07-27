import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState} from 'react';
import axios from 'axios';
function App(){
    const[books,setBook]=useState([]);

    const editBookById=(id,newTitle)=>{
        const newBooks=books.map((book)=>{
            if(id==book.id){
                book.title=newTitle;
                return{...book,title:newTitle};
            }
            return book;
        });
        setBook(newBooks);
    }

    const deleteBookById=(id)=>{
        const updatedBooks=books.filter((book)=>{
            return book.id!==id;
        });
        setBook(updatedBooks);
    }

    const createBook=async(title)=>{
        const response=await axios.post ('http://localhost:3001/books',{
            title
        });
        const newArray=[...books,response.data];
        setBook(newArray);
    };
    console.log(books);
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
};
export default App;
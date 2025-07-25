import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState} from 'react';
function App(){
    const[books,setBook]=useState([]);

    const deleteBookById=(id)=>{
        const updatedBooks=books.filter((book)=>{
            return book.id!==id;
        });
        setBook(updatedBooks);
    }

    const createBook=(title)=>{
        console.log("The book name = ",title);
        
        const newArray=[...books,{id:Math.round(Math.random()*100),title}];
        setBook(newArray);
    };
    console.log(books);
    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
};
export default App;
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState} from 'react';
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

    const createBook=(title)=>{
        console.log("The book name = ",title);
        
        const newArray=[...books,{id:Math.round(Math.random()*100),title}];
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
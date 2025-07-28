import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState,useEffect} from 'react';
import axios from 'axios';
function App(){
    const[books,setBook]=useState([]);

    const fetchBooks=async()=>{
        const response=await axios.get('http://localhost:3001/books')
            setBook(response.data);
    }
    
    //DONT EVER DO THIS,dont directly call this function:
    // fetchBook();
    //instead:
    useEffect(()=>{
        fetchBooks();
    },[]);

    const editBookById=async(id,newTitle)=>{
        const response=await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        });

        const newBooks=books.map((book)=>{
            if(id==book.id){
                book.title=newTitle;
                return{...book,...response.data};
            }
            return book;
        });
        setBook(newBooks);
    }

    const deleteBookById=async(id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`)
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
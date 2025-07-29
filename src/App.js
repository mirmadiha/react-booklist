import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState,useEffect} from 'react';
import useBookContext from './hooks/use-book-context';
function App(){
    
    const {fetchBooks}=useBookContext()
    
    
    //DONT EVER DO THIS,dont directly call this function:
    // fetchBook();
    //instead:
    useEffect(()=>{
        fetchBooks();
    },[]);


    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
};
export default App;
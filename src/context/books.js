import {useState,createContext} from 'react';
import axios from 'axios';

const BooksContext=createContext();

function Provider({children}){

const[books,setBook]=useState([]);

    const fetchBooks=async()=>{
        const response=await axios.get('http://localhost:3001/books')
            setBook(response.data);
    }

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

    const valueToShare={
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
};

export {Provider};
export default BooksContext;

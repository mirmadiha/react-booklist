import BookCreate from './components/BookCreate';
import {useState} from 'react';
function App(){
    const[Book,setBook]=useState([]);

    const createBook=(title)=>{
        console.log("The book name = ",title);
    };
    return (
        <div>
            <BookCreate onCreate={createBook}/>
        </div>
    )
};
export default App;
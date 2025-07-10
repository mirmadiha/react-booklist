import {useState} from 'react';
function BookCreate({onCreate}){
    const[title,setName]=useState('');
    const handleChange=(event)=>{
        setName(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
    }

    return(
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter the boook name</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button"> Create!</button>
            </form>
        </div>
    )
};

export default BookCreate;
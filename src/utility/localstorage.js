import { toast } from "react-toastify";

const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id =>{
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-book',JSON.stringify(storedReadBooks))
        toast("You have successfully added the book")
    }
    else{
        toast("The book already exists in the list")
    }
    
}

export { getStoredReadBook, saveReadBook };


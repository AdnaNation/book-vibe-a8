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

// wishlist

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      return JSON.parse(storedWishlist);
    }
    return [];
  };

  const saveToWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    const storedReadBooks = getStoredReadBook();
  
    
    const alreadyInWishlist = storedWishlist.find((bookId) => bookId === id);
    if (alreadyInWishlist) {
      toast("This book is already in your wishlist or Read list.");
      return;
    }
  
  
    const alreadyRead = storedReadBooks.find((bookId) => bookId === id);
    if (alreadyRead) {
      toast("You can't add a book you've marked as read.");
      return;
    }
  
    storedWishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    toast("You have successfully added the book to your wishlist!");
  };
  



export { getStoredReadBook, getStoredWishlist, saveReadBook, saveToWishlist };


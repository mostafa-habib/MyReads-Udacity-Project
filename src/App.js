import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { useState , useEffect} from 'react';
import { Route, Routes} from 'react-router-dom'
import BookList from './component/BookList'
import Search from './component/Search'

function BooksApp(){
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    BooksAPI.getAll().then((result) => {
      if (mounted) {
        setData(result)
      }
    })

    return () => {
      mounted = false;
    }

  }, [data]);

  const updatedShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      console.log("Updated");
    });
    
  };
    return (
      <div className="app">
        <Routes>
          <Route path='/' element={<BookList books ={data} render = {(book,shelf) => updatedShelf(book,shelf)}/>} />
          <Route path='search' element={<Search books ={data} render = {(book,shelf) => updatedShelf(book,shelf)}/>} />
        </Routes>
      </div>
        
      )
  
}

export default BooksApp

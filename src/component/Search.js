import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import * as BooksAPI from './../BooksAPI'

function Search(props) {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [input , setInput] = useState('');

  useEffect(() => {
    let mounted = true;

    if (input.length > 0) {
      const response = Promise.resolve(BooksAPI.search(input));
      response.then(function (result) {
        if (mounted) {
          setData(result);          
        }
      })
      }

    return () => {
      mounted = false;
    }

  }, [input]);
  
      
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <button className="close-search" onClick={() => navigate(-1)}>Close</button>
      <div className="search-books-input-wrapper">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Search by title or author"/>

      </div>
    </div>
    <div className="search-books-results">
        <ol className="books-grid">
          {
            data.length > 0 && input.length > 0 ?
              data
                .filter((book) => book.hasOwnProperty('imageLinks'))
                .map(book => {
                  props.books.map(b => book.id === b.id && (book.shelf = b.shelf) );
                  return (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={e => props.render(book, e.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading" >Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  )
                }) : ''
          }
      </ol>
    </div>
  </div>
  )
}

export default Search
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Utitly from './Utitly'

function BookList(props) {
    const navigate = useNavigate()

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            <Utitly shelf = 'currentlyReading' books ={props.books} render={(book,shelf) => props.render(book,shelf)}/>
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            <Utitly shelf = 'wantToRead' books ={props.books} render={(book,shelf) => props.render(book,shelf)}/>

            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            <Utitly shelf = 'read' books ={props.books} render={(book,shelf) => props.render(book,shelf)}/>

            </ol>
          </div>
        </div>
      </div>
    </div>
    <div className="open-search">
      <button onClick={() => navigate('search')}>Add a book</button>
    </div>
  </div>

  )
}

export default BookList
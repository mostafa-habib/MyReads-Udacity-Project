import React from 'react'


function Utitly(props) {

  return (
    <>
     {
          
            props.books.map(book => book.shelf === props.shelf && <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={e => props.render(book,e.target.value) }>
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
            </li> )

        }

    </>
  )
}

export default Utitly
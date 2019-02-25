import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ addBlog, newTitle, handleNewTitle, newAuthor, handleNewAuthor, newUrl, handleNewUrl }) => {
  return (
    <form onSubmit={addBlog}>
      <div>
        title:
        <input
          type="text"
          value={newTitle}
          name="title"
          onChange={handleNewTitle}
        />
      </div>
      <div>
        author:
        <input
          type="text"
          value={newAuthor}
          name="author"
          onChange={handleNewAuthor}
        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={newUrl}
          name="url"
          onChange={handleNewUrl}
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  handleNewTitle: PropTypes.func.isRequired,
  handleNewAuthor: PropTypes.func.isRequired,
  handleNewUrl: PropTypes.func.isRequired,
  newTitle: PropTypes.string.isRequired,
  newAuthor: PropTypes.string.isRequired,
  newUrl: PropTypes.string.isRequired
}


export default BlogForm
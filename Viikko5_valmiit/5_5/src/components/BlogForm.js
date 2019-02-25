import React from 'react' 

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

export default BlogForm
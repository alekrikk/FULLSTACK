import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Blog from './Blog'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title, author and likes', () => {

    const blogObject = {
        title: "Blogi",
        author: "Esko",
        url: "www.cs.helsinki.fi",
        likes: 2
      }

  const component = render(
    <SimpleBlog blog={blogObject} />
  )

  expect(component.container).toHaveTextContent(
    'Blogi'
  )
  expect(component.container).toHaveTextContent(
    'Esko'
  )
  expect(component.container).toHaveTextContent(
    '2'
  )
})

it('clicking like button clicks event handler once', async () => {
  const blogObject = {
    title: "Blogi",
    author: "Esko",
    url: "www.cs.helsinki.fi",
    likes: 2
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blogObject} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})



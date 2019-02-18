const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

const initialBlogs = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
    },
    {
        title: 'Where are muh tanks',
        author: 'Edsger W. Rommel',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 578
    }
]
beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})


test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(initialBlogs.length)
})


test('blog id is defined', async () => {
    const response = await api.get('/api/blogs')
    const id = response.body.map(r => r.id)
    expect(id).toBeDefined()
});



test('new blog can be added ', async () => {
    const newBlog = {
        title: 'Where are muh drinks',
        author: 'Tapani Kansa',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 2
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.title)

    expect(response.body.length).toBe(initialBlogs.length + 1)
    expect(contents).toContain(
        'Where are muh drinks'
    )
})

test('empty likes is zero', async () => {
    const newBlog = {
        title: 'Where are muh drinks',
        author: 'Tapani Kansa',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    }
    await api
        .post('/api/blogs')
        .send(newBlog)

    const response = await api.get('/api/blogs')
    const last = response.body.length-1
    expect(response.body[last].likes).toBe(0)
})


afterAll(() => {
    mongoose.connection.close()
})
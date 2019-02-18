const listHelper = require('../utils/list_helper')

const listWithTwoBlogs = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d15f8',
        title: 'Where are muh tanks',
        author: 'Edsger W. Rommel',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 578,
        __v: 0
    }
]

test('of empty lists is zero', () => {
    const result = listHelper.favoriteBlog(listWithTwoBlogs)
    expect(result).toBe(listWithTwoBlogs[1])
})
const dummy = (blogs) => {
    return 1
}

const totalLikes = blogs => {
    if (blogs.length === 0) {
        return 0
    }
    var totalLikes = blogs.reduce(function (accumulator, blog) {
        return accumulator + blog.likes
    }, 0)
    return totalLikes
}

const favoriteBlog = blogs => {
    var mostLikes = blogs.reduce(function (likes, blog) {
        return (likes.likes || 0) > blog.likes ? oldest : blog
      }, {})
      return mostLikes
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }

  const maxLikesBlog = blogs.reduce((maxLikes, blog) =>
    blog.likes > maxLikes.likes ? blog : maxLikes
  );
  return {
    title: maxLikesBlog.title,
    author: maxLikesBlog.author,
    likes: maxLikesBlog.likes,
  };
};

const mostBlogs = (blogs) => {
  if(blogs.length === 0){
    return { author: undefined, blogs: undefined };
  }
  const blogsCountMap = blogs.reduce((countMap, blog) => {
    countMap[blog.author] = (countMap[blog.author] || 0) + 1;
    return countMap; 
  }, {});

  const topAuthor = Object.keys(blogsCountMap).reduce(
    (maxAuthor, author)=>
      blogsCountMap[author] > blogsCountMap[maxAuthor] ? author : maxAuthor ,
      Object.keys(blogsCountMap)[0]
    
  )
  return {
    author : topAuthor,
    blogs: blogsCountMap[topAuthor]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};

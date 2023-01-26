import React from 'react';
import BlogItem from './BlogItem';

const BlogPostList = ({posts}) => {
  return (
    <>
    {posts.map(post => (
        <BlogItem 
            key={post.id} 
            title={post.title} 
            body={post.body} 
            date={post.date}
            />
    ))}
    </>
  )
    

};

export default BlogPostList;

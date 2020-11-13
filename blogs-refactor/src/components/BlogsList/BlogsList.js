import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../actionCreators/blogActionCreators';
import BlogForm from '../BlogForm/BlogForm';
import Header from '../Header/Header';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledBlogElement = styled.div`
  border-width: ${({ firstIndex }) => {
    if (firstIndex) return '4px 4px 4px 4px';
    return '0 4px 4px 4px';
  }};
  border-color: #3f51b5;
  display: flex;
  flex-direction: column;
  border-style: solid;
  padding: 5px;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
const StyledAuthor = styled.div`
  font-size: 14px;
  text-decoration: underline;
`;
const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BlogsList = () => {
  const blogs = useSelector(({ blog }) => blog.blogs);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const handleBlogClick = (id) => {
    history.push(`/blogs/${id}`);
  };

  return (
    <>
      <Header text='Blogs' />
      <BlogForm />
      {blogs?.map((blog, index) => (
        <StyledBlogElement firstIndex={index === 0} key={blog.id}>
          <StyledMainContent>
            <div>
              <StyledTitle onClick={() => handleBlogClick(blog.id)}>
                {blog.title}
              </StyledTitle>
              <StyledAuthor>by: {blog.author}</StyledAuthor>
            </div>
          </StyledMainContent>
        </StyledBlogElement>
      ))}
    </>
  );
};

export default BlogsList;

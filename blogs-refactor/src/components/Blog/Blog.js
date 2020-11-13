import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  getBlogById,
  removeBlog,
  updateBlog,
  updateBlogComments,
} from '../../actionCreators/blogActionCreators';
import styled from 'styled-components';
import Header from '../Header/Header';
import { DEFAULT_COLOR } from '../../utils/globalVariables';
import SubHeader from '../SubHeader/SubHeader';
import { Delete, ThumbUp } from '@material-ui/icons';
import { Button, Paper, TextField } from '@material-ui/core';

const StyledCommentsContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  padding: 24px;
  box-shadow: 2px 2px 2px 2px ${DEFAULT_COLOR};
  margin-top: 10px;
`;

const StyledThumbUp = styled(ThumbUp)`
  color: ${DEFAULT_COLOR};
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;
  font-size: 14px;
  transform: ${({ likeEffect }) => (likeEffect ? 'scale(1.2)' : 'scale(1)')};
  transition: transform 400ms ease-in-out !important;
`;

const StyledLikesRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 10px;
`;

const StyledItem = styled.div`
  padding: 0 10px;
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 2px 4px;
  background-color: transparent !important;
`;

const Blog = () => {
  const dispatch = useDispatch();
  const blog = useSelector(({ blog }) => blog.blogById);
  const match = useRouteMatch('/blogs/:id');
  const blogId = match.params.id;
  const [likeEffect, setLikeEffect] = useState(false);
  const [comment, setComment] = useState('');
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLikeEffect(false);
    }, 400);
  }, [likeEffect]);

  const handleLikeBlog = (blog) => {
    setLikeEffect(true);
    const updatedLikesBlog = {
      ...blog,
      likes: blog.likes + 1,
    };
    dispatch(updateBlog(updatedLikesBlog));
  };

  const deleteBlog = () => {
    dispatch(removeBlog(blog.id));
    history.push('/blogs');
  };

  const submitComment = (e) => {
    e.preventDefault();
    if (comment) dispatch(updateBlogComments(blog.id, { comment }));
  };

  if (!blog) return null;

  return (
    <>
      <Header text={blog.title} />
      <SubHeader>Author</SubHeader>
      <StyledItem>{blog.author}</StyledItem>
      <SubHeader>Likes</SubHeader>
      <StyledLikesRow>
        <div>{blog.likes}</div>
        <StyledThumbUp
          likeEffect={likeEffect}
          onClick={() => handleLikeBlog(blog)}
        />
      </StyledLikesRow>
      <SubHeader>Url</SubHeader>
      <StyledItem>{blog.url}</StyledItem>
      <SubHeader>Comments</SubHeader>
      <StyledForm onSubmit={submitComment}>
        <TextField
          variant='filled'
          id='comment-input'
          label='Comment'
          placeholder='Add a comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button type='submit' color='primary'>
          Ok
        </Button>
      </StyledForm>
      <StyledCommentsContainer>
        {blog?.comments?.map((comment) => (
          <div key={blog.id}>{comment}</div>
        ))}
      </StyledCommentsContainer>
      <SubHeader>Remove blog</SubHeader>
      <Delete
        color='error'
        style={{ cursor: 'pointer' }}
        onClick={deleteBlog}
      />
    </>
  );
};

export default Blog;

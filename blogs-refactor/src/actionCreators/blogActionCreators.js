import blogService from '../services/blogs';
import { setNotification } from './notificationActionCreator';

export const getAllBlogs = () => {
  return async (dispatch) => {
    try {
      const blogs = await blogService.getAll();
      dispatch({
        type: 'GET_ALL_BLOGS',
        payload: blogs,
      });
    } catch (err) {
      const message = err?.response?.data?.error;
      dispatch(
        setNotification({
          message,
          type: 'error',
        })
      );
    }
  };
};

export const createBlog = (body) => {
  return async (dispatch) => {
    try {
      const blog = await blogService.postBlog(body);
      dispatch({
        type: 'CREATE_BLOG',
        payload: blog,
      });
      dispatch(
        setNotification({
          message: `A new blog ${blog.title} by ${blog.author} was created!`,
          type: 'success',
        })
      );
      dispatch(getAllBlogs());
    } catch (err) {
      const message = err?.response?.data?.error;
      dispatch(
        setNotification({
          message,
          type: 'error',
        })
      );
    }
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.deleteBlog(id);
      dispatch(
        setNotification({
          message: 'Blog was successfully deleted',
          type: 'success',
        })
      );
      dispatch(getAllBlogs());
    } catch (err) {
      const message = err?.response?.data?.error;
      dispatch(
        setNotification({
          message,
          type: 'error',
        })
      );
    }
  };
};

export const updateBlog = (data) => {
  return async (dispatch) => {
    try {
      await blogService.editBlog(data);
      dispatch(getBlogById(data.id));
      dispatch(
        setNotification({
          message: 'Blog was successfully edited',
          type: 'success',
        })
      );
    } catch (err) {
      const message = err?.response?.data?.error;
      dispatch(
        setNotification({
          message,
          type: 'error',
        })
      );
    }
  };
};

export const getBlogById = (id) => {
  return async (dispatch) => {
    const blog = await blogService.getById(id);
    dispatch({
      type: 'GET_BLOG_BY_ID',
      payload: blog,
    });
  };
};

export const updateBlogComments = (id, payload) => {
  return async (dispatch) => {
    await blogService.editBlogComment(id, payload);
    dispatch(getBlogById(id));
  };
};

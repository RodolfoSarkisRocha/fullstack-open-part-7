import axios from 'axios';
import { BASE_URL } from '../config/mainConfig';
import utils from '../utils/utils';
const baseUrl = `${BASE_URL}/blogs`;

const config = () => ({
  headers: {
    Authorization: utils.getUserToken(),
  },
});

const getAll = async () => {
  const response = await axios.get(baseUrl);
  const blogs = response.data;
  if (blogs && blogs.length > 0) {
    const sortedBlogs = blogs.sort((a, b) => {
      if (a.likes > b.likes) return -1;
      return 1;
    });

    return sortedBlogs;
  }
};

const postBlog = async (body) => {
  const response = await axios.post(baseUrl, body, config());
  return response.data;
};

const editBlog = async ({ id, user, ...body }) => {
  const result = await axios.put(
    `${baseUrl}/${id}`,
    { user: user?.id, ...body },
    config()
  );
  return result;
};

const editBlogComment = async (id, payload) => {
  const result = await axios.put(
    `${baseUrl}/${id}/comment`,
    payload,
    config()
  );
  return result;
};
const deleteBlog = async (id) => {
  await axios.delete(`${baseUrl}/${id}`, config());
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, postBlog, editBlog, deleteBlog, getById, editBlogComment };

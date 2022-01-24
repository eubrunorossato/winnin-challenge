import { getRepository } from 'typeorm';

function builPostList(data, postList) {
  const { title, author_fullname, ups, num_comments, created } = data;
  postList.push({
    post_title: title,
    author: author_fullname,
    ups,
    create_date: new Date(created * 1000),
    comments: num_comments,
  });
}

const services = {
  save: async ({ children }) => {
    try {
      const postList = [];
      children.map(async ({ data }) => {
        builPostList(data, postList);
      });
      const postTable = await getRepository('post');
      await postTable.save(postList);
      return {
        code: 201,
        message: 'Posts Create on Database',
      };
    } catch (error) {
      return {
        code: 500,
        message: 'Error saving on Post Table',
      };
    }
  },
  getByDate: async ({ order, initDate, endDate }) => {
    try {
      const postTable = await getRepository('post');
      const postList = await postTable.query(`
        SELECT *
        FROM public.post p
        WHERE create_date BETWEEN '${initDate}'::date AND '${endDate}'::date
        ORDER BY p.${order} DESC
      `);
      return {
        code: 200,
        data: postList,
        message: 'Sucess',
      };
    } catch (error) {
      return {
        code: 500,
        data: [],
        message: error.message,
      };
    }
  },
};

export default services;

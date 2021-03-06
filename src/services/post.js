import { getRepository } from 'typeorm';

function builPostList(data, postList) {
  const { title, author, ups, num_comments, created } = data;
  postList.push({
    post_title: title,
    author: author,
    ups,
    create_date: new Date(created * 1000),
    comments: num_comments,
  });
}

export default {
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
        message: error.message,
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
  getByAuthor: async ({ order }) => {
    try {
      const postTable = await getRepository('post');
      const postList = await postTable.query(`
          SELECT p.author,
          p.${order}
          FROM public.post p
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

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

function formatDate(initDate, endDate) {
  const timestampInitDate = new Date(initDate).get();
  const timestampEndDate = new Date(endDate).get();
  return {
    timestampInitDate,
    timestampEndDate,
  };
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
    const { timestampInitDate, timestampEndDate } = formatDate(
      initDate,
      endDate
    );
    const postTable = await getRepository('post');
    const postList = await postTable.query(`
      SELECT *
      FROM public.post p
      WHERE p.create_date >= ${timestampInitDate} 
      and p.create_date <= ${timestampEndDate}
      ORDER BY p.${order} DESC
    `);
    console.log(postList);
  },
};

export default services;

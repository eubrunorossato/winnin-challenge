import { getRepository } from 'typeorm';

const services = {
  save: async ({ children }) => {
    const postList = [];
    try {
      children.map(async ({ data }) => {
        const { title, author_fullname, ups, num_comments, created } = data;
        postList.push({
          post_title: title,
          author: author_fullname,
          ups,
          create_date: created,
          comments: num_comments,
        });
      });
      const postTable = await getRepository('post');
      await postTable.save(postList);
      return {
        code: 201,
        message: 'Posts Create on Data base',
      };
    } catch (error) {
      return {
        code: 500,
        message: 'Error saving on Post Table',
      };
    }
  },
};

export default services;

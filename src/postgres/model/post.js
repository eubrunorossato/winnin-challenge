import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'post',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    post_title: {
      type: 'varchar',
    },
    author: {
      primary: true,
      type: 'varchar',
    },
    create_date: {
      type: 'int',
    },
    ups: {
      type: 'int',
    },
    comments: {
      type: 'int',
    },
  },
});

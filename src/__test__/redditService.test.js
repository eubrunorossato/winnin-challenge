/* eslint-disable no-undef */
import 'jest';
import 'jest-extended';
import redditService from '../services/redit';
import postService from '../services/post';
import postsData from './mocks/data.save';
import axios from 'axios';
jest.mock('axios');
jest.mock('../services/post');

describe('When get posts method was called', () => {
  it('It Should return a code 200 and a list on data', async () => {
    axios.get.mockImplementation(() => {
      return {
        data: {
          data: {
            ...postsData,
          },
        },
      };
    });
    postService.save.mockImplementation(() => {
      return {
        code: 201,
        message: 'Posts created on Database',
      };
    });
    const { code, message } = await redditService.getPosts();
    expect(code).toBe(201);
    expect(message).toBe('Posts created on Database');
  });
  it('It Should return a code 500 and an empty list on data', async () => {
    axios.get.mockImplementation(() => {
      throw new Error('Error reaching reddit api');
    });
    const { code, message } = await redditService.getPosts();
    expect(code).toBe(500);
    expect(message).toBe('Error reaching reddit api');
  });
});

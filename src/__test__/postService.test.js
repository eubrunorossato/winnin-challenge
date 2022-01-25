/* eslint-disable no-undef */
import 'jest';
import 'jest-extended';
import postService from '../services/post';
import { getRepository } from 'typeorm';
import dataToSave from './mocks/data.save';
jest.mock('typeorm');

describe('When get by date method was called', () => {
  it('It Should return a code 200 and a list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        query: () => {
          return {
            author: 'Bruno',
            post_title: '5 motivos para trabalhar na winnin',
            create_date: '2022-01-25',
            ups: 100,
            comments: 150,
          };
        },
      };
    });
    const { code, data, message } = await postService.getByDate(
      'ups',
      '2020-01-01',
      '2022-01-24'
    );
    expect(code).toBe(200);
    expect(Object.keys(data)).toContain(
      'author',
      'post_title',
      'create_date',
      'ups',
      'comments'
    );
    expect(message).toBe('Sucess');
  });
  it('It Should return a code 500 and an empty list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        query: () => {
          throw new Error('Some Error');
        },
      };
    });
    const { code, data, message } = await postService.getByDate(
      'ups',
      '2020-01-01',
      '2022-01-24'
    );
    expect(code).toBe(500);
    expect(Object.keys(data)).toStrictEqual([]);
    expect(message).toBe('Some Error');
  });
});

describe('When get by author method was called', () => {
  it('It Should return a code 200 and a list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        query: () => {
          return {
            author: 'Bruno',
            ups: 100,
          };
        },
      };
    });
    const { code, data, message } = await postService.getByAuthor('ups');
    expect(code).toBe(200);
    expect(Object.keys(data)).toContain('author', 'ups');
    expect(message).toBe('Sucess');
  });
  it('It Should return a code 500 and an empty list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        query: () => {
          throw new Error('Some Error');
        },
      };
    });
    const { code, data, message } = await postService.getByAuthor('ups');
    expect(code).toBe(500);
    expect(Object.keys(data)).toStrictEqual([]);
    expect(message).toBe('Some Error');
  });
});

describe('When save method was called', () => {
  it('It Should return a code 201 and a list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        save: () => {
          return true;
        },
      };
    });
    const { code, message } = await postService.save({ ...dataToSave });
    expect(code).toBe(201);
    expect(message).toBe('Posts Create on Database');
  });
  it('It Should return a code 500 and an empty list on data', async () => {
    getRepository.mockImplementation(() => {
      return {
        save: () => {
          throw new Error('Some Error');
        },
      };
    });
    const { code, message } = await postService.save({ ...dataToSave });
    expect(code).toBe(500);
    expect(message).toBe('Some Error');
  });
});

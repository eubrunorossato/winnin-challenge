import axios from 'axios';
import postServices from './post';
const services = {
  getPerPeriod: async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REDIT_URL}/r/artificial/hot`
      );
      const { code, message } = await postServices.save(data.data);
      return {
        code,
        message,
      };
    } catch (error) {
      return {
        code: 500,
        message: 'Internal Server Error',
      };
    }
  },
  getPerOrder: () => {},
};

export default services;

import axios from 'axios';
export default {
  getPerPeriod: async req => {
    const { data } = await axios.get(
      `${process.env.REDIT_URL}/r/artificial/hot`
    );
    return data;
  },
  getPerOrder: () => {},
};

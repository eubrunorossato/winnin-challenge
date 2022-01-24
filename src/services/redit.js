import axios from 'axios';
export default {
  getPerPeriod: async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REDIT_URL}/r/artificial/hot`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPerOrder: () => {},
};

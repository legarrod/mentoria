import axios from 'axios';

export const getData = async (url, setData) => {
  try {
    const { data } = await axios.get(url);
    setData(data);
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (url) => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

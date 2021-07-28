import axios from 'axios'

export const getConfig = async function () {
  try {
    const { data } = await axios.get(`/api/config`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const axios = require("axios");


const get = async (url, params) => {
    const response = await axios.get(url, params)
    return response;
  };

const post = async (url, params) => {
    const response = await axios.post(url, params)
    return response;
  };
module.exports = {
    get,
    post,
  };
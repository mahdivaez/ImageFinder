import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6GFeGslyqJgRo2AIHsCekiYPn6DVd-lDchERgB5xvmg',
      },
})
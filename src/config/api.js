import axios from 'axios';

const API_URL = 'https://pokedex-2022-upb-marcos.herokuapp.com/api/v1/pokedex/';

export default axios.create({

    baseURL: API_URL

})
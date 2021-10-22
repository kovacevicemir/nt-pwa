import axios from 'axios'
import {encode} from "js-base64";

const CloudantDBURL = process.env.REACT_APP_CLOUDANT_URL
const username = process.env.REACT_APP_CLOUDANT_USERNAME
const password = process.env.REACT_APP_CLOUDANT_PASSWORD

//BASE 64   
const authKeyEncode = encode (`${username}:${password}`)

export default axios.create({
    baseURL: `${CloudantDBURL}`,
    headers:{
        "Authorization": `Basic ${authKeyEncode}`,
    }
})

import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api";

const empdata = {};

// empdata.listEmploye = async () =>{
//     const urlList = baseUrl +"/search"
//     const res = await axios.get(urlList)
//     .then(response=>{return response.data})
//     .catch(error=>{return error();
//     })
//     return res;
// }
empdata.save=async(data)=>{
    const urlSave = baseUrl+"/saveEmploy"
    const res = await axios.post(urlSave,data)
    .then(response=>{return response.data})
    .catch(error=>{return error;})

    return res;
}

export default empdata;
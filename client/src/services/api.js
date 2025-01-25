import axios from 'axios';
const API_URL = 'http://localhost:8000';  //our server running on this addess.




const API_GMAIL = async (serviceUrlObject, requestData={} ,type) => {    
    return await axios({    //axios is asincronus functiion so we have  to use async and await keywords.
        method:serviceUrlObject.method,
        url:`${API_URL}/${serviceUrlObject.endpoint}/${type}`,
        data:requestData

    })
};

export default API_GMAIL;
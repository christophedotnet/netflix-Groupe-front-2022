import axios from "axios"

const url = "http://localhost:7119/api/v1/"

export const getFaqs = () =>{
    return axios.get(url+'faq')
}

export const getToken=(mail,password)=>{
    return axios.get(url+'user/token?mail='+mail+"&password="+password)
}

export const postAvatar=(id,name,formData,token)=>{
    return axios.post(url+"avatar?id="+id+'&avatar='+name, formData,{ headers : {"Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`}})
}
// 'https://fakestoreapi.com/products'

const BASEURL ="https://fakestoreapi.com";



 export const API = async (config)=>{
    const {endPoint}=config;
    const url=BASEURL+endPoint; 
    const res=await fetch(url)
    const data =await res.json()
    return data;
}

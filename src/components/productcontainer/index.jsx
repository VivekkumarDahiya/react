import { useEffect, useState } from "react";
import { API } from "../../services";


const ProductsContainer=()=>{

   const [status,setStatus]=useState("loading")//api status

   const [products,setProducts]=useState([])//storing products

   const getProducts= async()=>{
     try{
        const data=await API({
        endPoint:"/products"
     })
     setProducts(data)
     setStatus("success")
     }catch(e){
           console.log(e)
           setStatus("error")
     }
        
   }

   useEffect(()=>{
    getProducts()
   },[])

   const isloading= status==="loading";
   const iserror= status==="error";
   const isProducts =status==="success" && products.length!==0
   const noProducts= status==="success" && products.length===0
    return(
        <div>
            {isloading && <h4>Loading Products....</h4>}
            {iserror && <h4>Something went wrong</h4>}
            {noProducts && <h4>No products Avialable</h4>}
            {
                isProducts && 
                <div>
                    <ProductFilter/>
                    <ProductList/>
                </div>
            }
        </div>
    )
}
export default ProductsContainer;
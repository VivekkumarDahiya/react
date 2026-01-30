import ProductItem from "./productItem";


const ProductList =({products})=>{
    return( 
        <div>
            {
                products.map((item)=>{
                     <ProductItem product={item} key={item.id}/> 
                })
                
            }
        </div>
    )
}

export default ProductList;
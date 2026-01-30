
const ProductItem =()=>{
    return (
        <div>
           <img src={product.image} alt={product.title} />   
           <div>
            <p>{product.title}</p>
            
           </div>
        </div>
    )
}

export default ProductItem;
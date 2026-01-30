


const ProductFilter=()=>{
    return(
        <div>
        <h3>Filters</h3>
        <FilterItems value={"all"} label={"ALL"}/>
        </div>
    )
}
export default ProductFilter
const FilterItems=({label,onClick,active,value})=>{

 const isActive= active===value;
    return(
        <button onClick={()=>onClick(value)}>
            {label}
        </button>
    )
}


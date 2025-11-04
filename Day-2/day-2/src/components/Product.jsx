const Product = ({product}) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '16px', margin: '16px', display:'flex', flexDirection:'column', alignItems:'center'}}>   
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
    );
}

export default Product;
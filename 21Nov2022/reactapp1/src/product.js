function Product(props){
    return (
        <div className="product" >

            <h3>My Product Name : {props.name} </h3>
            <p> Price: {props.price}  </p>
            <p> Quantity: {props.quantity}  </p>
            
        </div>
    )
}

export default Product;
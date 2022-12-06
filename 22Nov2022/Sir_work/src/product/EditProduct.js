import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  console.log(product);


  useEffect(() => {
    productone(params.pid);
  },[]);

  // Change value input
  const changeValue = (e)=> {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  // submit value
  const submitValue = (e)=>{
    e.preventDefault();
    productsubmit();
  }

  // Submit product database
  const productsubmit = () =>
    axios
      .post(
        "http://localhost/react_resource/22Nov2022/Sir_work/api/updateproduct.php",
        { prid: product.id, prname: product.name, prdetails: product.details, prprice:product.price }
      )
      .then((res) => {
        navigate("/products");
        //console.log(res.data.product.prdata[0]);
      })
      

  //console.log("MyID:" + params.pid);


// Get Product show
  const productone = (id) =>
    axios
      .post(
        "http://localhost/react_resource/22Nov2022/Sir_work/api/getproduct.php",
        { prid: id }
      )
      .then((res) => {
        setProduct(res.data.product.prdata[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));

  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>
      <form onSubmit={submitValue} >
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            value={product.details}
            onChange={changeValue}
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="price"
            value={product.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

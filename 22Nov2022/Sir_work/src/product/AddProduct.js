import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

    const navigate = useNavigate();

    const [prodInfo, prodInfoSet] = useState({
        name: "",
        details: "",
        price: "",
    });

    // console.log(prodInfo);

    const onChangeValue = (e) => {
        prodInfoSet({ ...prodInfo, [e.target.name]: e.target.value });
    }

    const SubmitValue = async (e) => {
        // alert("Submitted")
        e.preventDefault();
        e.persist();


        axios.post(
            `http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/addproduct.php`,
            {
                pname: prodInfo.name,
                pdetails: prodInfo.details,
                pprice: prodInfo.price
            }).then(
                (res) => {
                    alert(res.data.msg);
                    navigate("/AllProducts");
                }
            );
    }



    return (

        <div className="col-sm-8">
            <h1>Create New Product</h1>

            <form onSubmit={SubmitValue}>

                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Product Name" onChange={onChangeValue} />

                </div> <br></br>

                <div className="form-group">
                    <label >Product Details</label>
                    <textarea name="details" className="form-control" placeholder="Enter Product Details" onChange={onChangeValue} >
                    </textarea>
                </div> <br></br>


                <div className="form-group">
                    <label >Price</label>
                    <input type="text" name="price" className="form-control" placeholder="Enter Product Price" onChange={onChangeValue} />
                </div>  <br></br>

                <button type="submit" className="btn btn-primary">Create New</button>
            </form>
        </div>

    )
}

export default AddProduct;




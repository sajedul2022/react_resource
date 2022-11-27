import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const [product, setProduct] = useState([]);

    console.log(product);


    useEffect(() => {
        allprod();
    }, []);

//  View product
    const allprod = async () => {
        axios.get('http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/allproducts.php')
            .then((res) => {
                setProduct(res.data.datas.pr)
            })
    };



    // Delete product 
    const delconfirm = (id) => {
        // console.log(id);
        delprod(id);
    }

    const delprod = async (id) => {
        axios.post(
            'http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/delproduct.php',
            {prodId: id}
            
            )
            .then((res) => {
                alert(res.data.msg);
                // setProduct(res.data.datas.pr)
                allprod();
            })
    };




    // Edit product 
    const editprod = (id) => {
        console.log(id);
    }



    // New product
    


    return (
        <div className="col-sm-8">
            <h2 className="bg-dark text-light"> All Product </h2>
            <table className="table table-striped">
                <thead className="bg-dark text-light">
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>details</th>
                        <th>image</th>
                        <th>price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (

                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.details}</td>
                            <td>{item.image}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-warning' onClick={()=>editprod(item.id)}  >Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>delconfirm(item.id)} >Delete</button>
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>

            <Link to='/AddProduct' className='btn btn-primary'> Add New Product </Link>
        </div>
    )
}

export default AllProducts;


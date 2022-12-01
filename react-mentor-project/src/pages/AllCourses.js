import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios
      .get(
        "http://localhost/wdpf-51/me/f_s_w_d/react/react-mentor-project/api/courses/allcourses.php"
        // "http://localhost/React/react_resource/react-mentor-project/api/courses/allcourses.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

    const delconfirm = (id) => {
      delprod(id);
    };

    const delprod = async (id) => {
      axios
        .post(
          "http://localhost/wdpf-51/me/f_s_w_d/react/react-mentor-project/api/courses/delproduct.php",
          // "http://localhost/React/react_resource/react-mentor-project/api/courses/delproduct.php",
          {
            prodid: id,
          }
        )
        .then((res) => {
          alert(res.data.msg);
          allprod();
        });
    };

  return (
    <>
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>
          {/* <h2 className="bg-dark text-light">List Courses</h2> */}
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Details</th>
                <th>Price</th>
                {/* <th>Edit</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>{item.price}</td>
                  {/* <td> */}
                    {/* <Link
                  to={`/products/edit/${item.id}`}
                  className="btn btn-primary"
                > */}
                    {/* Edit */}
                    {/* </Link> */}
                  {/* </td> */}
                  <td>
                    <button className="btn btn-danger" onClick={() => delconfirm(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/AddCourses/add" className="btn btn-primary">
          Add new product
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllCourses;

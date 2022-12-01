import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourses = () => {
  const navigate = useNavigate();
  const [prodinfo, prodinfSet] = useState({
    name: "",
    details: "",
    price: "",
  });

  //console.log(prodinfo);

  const onChangeValue = (e) => {
    prodinfSet({ ...prodinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/wdpf-51/me/f_s_w_d/react/react-mentor-project/api/courses/addproduct.php",
        {
          pname: prodinfo.name,
          pdetails: prodinfo.details,
          pprice: prodinfo.price,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate("/AllCourses");
      });
  };

  return (
    <>
      <section id="popular-courses" className="courses">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h1>Course Entry Form</h1>

            <form onSubmit={SubmitValue}>
              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={onChangeValue}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Course Details</label>
                <textarea
                  className="form-control"
                  name="details"
                  onChange={onChangeValue}
                  type="text"
                ></textarea>
              </div>
              <div className="form-group">
                <label>Course Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeValue}
                  name="price"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>

      </section>
    </>


  );
};

export default AddCourses;



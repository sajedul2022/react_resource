import React, { useEffect, useState } from "react";

const ViewStudent = () => {
  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    
    <div className="container">
      <h2>Student List Table</h2>
      <p>
        The .table className adds basic styling (light padding and only
        horizontal dividers) to a table:
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Age</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {getuserdata.map((element, id) => {
            return (
              <>
                <tr>
                  <th scope="row" key={id} item={element}>
                    {id + 1}
                  </th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.work}</td>
                  <td>{element.mobile}</td>
                  <td>{element.add}</td>
                  <td>{element.age}</td>
                  <td>{element.desc}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;

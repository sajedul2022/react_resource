import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Userlist = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        alluser();
    }, []);

    const [isuser, setuser] = useState([]);
    const alluser = async (ids) => {
        try {
            axios.get(`http://localhost/reactApi/users.php`)
                .then(res => {
                    console.log(res.data.userlist.userdata)
                    setuser(res.data.userlist.userdata);
                })
        } catch (error) { throw error; }
    }

    const deleteConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteUser(id);
        }
    };
    const deleteUser = async (id) => {
        try {
            axios.post(`http://localhost/reactApi/deleteusers.php`, {
                userids: id,
            })
                .then(res => {
                    setuser([]);
                    alluser();
                    return;
                })
        } catch (error) { throw error; }
    }

    return (
        <div className="col-sm-8">
            <Link className="btn btn-primary" to="/inser"> Create User </Link>




            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {isuser.map((item, index) => (
                    // <div className="list" key={item.user_id}>
                        <tbody>
                            <tr>
                                <td> {item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>
                                    <Link to={`edit/${item.user_id}`} className="btn btn-warning"> Edit </Link>
                                </td>
                                <td>
                                    <p onClick={() => deleteConfirm(item.user_id)} className=" btn btn-danger"> Delete </p>
                                </td>
                            </tr>
                        </tbody>
                    // </div>
                     ))}
                </table>
                </div >
           
        
    );
}

export default Userlist;
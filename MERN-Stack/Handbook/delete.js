
// route

const express = require('express');
const router = express.Router();
const RowModel = require('../models/RowModel');

// Define the route to delete a row

router.delete('/api/rows/:id', async (req, res) => {
  try {
    const rowId = req.params.id;

    // Delete the row with the specified ID
    const deletedRow = await RowModel.findByIdAndDelete(rowId);

    if (deletedRow) {
      res.status(200).json({ message: 'Row deleted successfully' });
    } else {
      res.status(404).json({ message: 'Row not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

// react page

import React from 'react';
import axios from 'axios';

const Row = ({ row }) => {

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/rows/${row._id}`);
      console.log(response.data); // Optional: Handle success message
    } catch (error) {
      console.error(error); // Optional: Handle error
    }
  };

  return (
    <div>
      <p>{row.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Row;



// or


constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }


OR

constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    }


deleteEmployee(id) {
        axios.get('http://localhost:4000/employees/deleteEmployee/' + id)
        .then(() => {
        console.log('Employee Deleted !!!')
        })
        .catch((error) => {
        console.log(error)
        })
        }

// before render


// return

onClick={() => this.deleteEmployee(employee._id)}
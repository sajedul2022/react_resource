import { useState } from 'react';

function Contact() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
  }



  return (

    <div className="col-sm-8">
      <h2>Contact</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="">Name</label>
          <input type="text"
            className="form-control"
            placeholder="Enter name"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}

          />
        </div>

        <div className="form-group">
          <label for="">Email</label>
          <input type="text/babel" className="form-control" placeholder="Enter Email" name="email"

            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="">Email</label>

          <textarea placeholder="Enter Text" className="form-control"
            name="textarea"
            value={inputs.textarea || ""}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">
          <br></br>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>


      </form>

      You Have Submitted: {inputs.username} {inputs.email} {inputs.textarea}

    </div>


  );
}

export default Contact;
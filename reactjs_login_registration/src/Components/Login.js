import React from 'react'

export default function Login() {
  return (
    <div class="container">
      <div class="row">
            <h1 class="text-center" >Login Form</h1>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name='email' class="form-control"  placeholder="Enter email"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name='password' class="form-control"  placeholder="Password"/>
                </div>
               
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Register = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div class="container">
                <div class="mt-5 d-flex justify-content-center">
                    <form action="" class="text-center w-50">
                        <h3 class="text-center mb-3">Register</h3>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="uname" placeholder="name@example.com" />
                            <label for="uname">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="umail" placeholder="name@example.com" />
                            <label for="umail">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" id="ucontact" placeholder="name@example.com" />
                            <label for="ucontact">Contact</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="upass" placeholder="Password" />
                            <label for="upass">Password</label>
                        </div>
                        <div class="mt-2">
                            <Link to="/login">Already a part of LockNet? Simply Login Here</Link>
                        </div>
                        <button class="btn btn-dark w-100 mt-3">Register</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.success('User registered successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    });
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1000);
                }
            })
            .catch(err => {
                console.log(err);
                toast.error('User registration failed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    return (
        <React.Fragment>
            <Navbar />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Zoom
            />
            <div className="container">
                <div className="mt-5 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center w-50">
                        <h3 className="text-center mb-3">Login to Access your Lockers</h3>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="umail" placeholder="name@example.com" {...register("email")} />
                            <label htmlFor="umail">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="upass" placeholder="Password" {...register("password")} />
                            <label htmlFor="upass">Password</label>
                        </div>
                        <div className="mt-2">
                            <Link to="/register">New to LockNet? Click Here to Register</Link>
                        </div>
                        <button className="btn btn-dark w-100 mt-3">Login</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
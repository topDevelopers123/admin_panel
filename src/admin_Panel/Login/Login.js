import React from 'react'
import login_img from "./login.jpg"
import "./Login.css"
import { useFormik } from 'formik'
import * as yup from "yup"
import { useAuthContext } from '../../Context/index.context'

function Login() {

    const { login } = useAuthContext()

    const initialValue = {
        email: "",
        password: ""
    }
 
    const Login = yup.object({
        email: yup.string().email().required("Email is Required"),
        password: yup.string().min(6).max(16).required("Password is Required")
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: initialValue,
        validationSchema: Login,
        onSubmit: (value) => {
            login(value, handleReset)
        }
    })



    return (
        <div>
            <div className='dashboard-login h-100'>
                <div className='flex'>
                    <div className='col-md-6'>
                        <div className='login_img h-[100vh]' style={{ backgroundImage: `url(${login_img})`, backgroundSize: "cover", backgroundPosition: "bottom" }}></div>
                    </div>
                    <div className='col-md-6'>
                        <div className='login_form h-[100vh] bg-white flex flex-column justify-center items-center'>
                            <h2 className='mb-5 text-[#4d869c]'>Admin Login </h2>
                            <form className='w-[70%]' onSubmit={handleSubmit} >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Enter Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name='email'
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}                                       
                                    />
                                    {touched.email && errors.email ? <p className="text-start text-danger ps-1 mt-1">{errors.email}</p> : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Enter Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name='password'
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                       
                                    />
                                    {touched.password && errors.password ? <p className="text-start text-danger ps-1 mt-1">{errors.password}</p> : null}
                                </div>
                                <button type="submit" className="btn btn-primary login rounded px-5" >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react'

function Login() {
    return (
        <div>
            <div className='container mt-5'>
                <div className="row g-5 d-flex justify-content-center align-items-center">
                    <div className="col-4 text-center ">
                        <div ><i style={{ color: '#7AB2B2', fontSize: '80px' }} className="bi bi-person-circle"></i>
                            <input placeholder='Username' type="text" className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                    </div>
                </div>
                <div className="row mt-0 g-5 d-flex justify-content-center align-items-center">
                    <div className="col-4 text-center ">
                        <input placeholder='Enter Password ' type="password" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button style={{ backgroundColor: '#4D869C' }} type="submit" className="btn text-light">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;

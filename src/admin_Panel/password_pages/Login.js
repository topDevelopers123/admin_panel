import React from 'react'

function Login() {
    return (
        <div>
            <div className='container mt-5'>
                <div class="row g-5 d-flex justify-content-center align-items-center">
                    <div class="col-4 text-center ">
                        <div ><i style={{ color: '#7AB2B2', fontSize: '80px' }} class="bi bi-person-circle"></i>
                            <input placeholder='Username' type="text" class="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                    </div>
                </div>
                <div class="row mt-0 g-5 d-flex justify-content-center align-items-center">
                    <div class="col-4 text-center ">
                        <input placeholder='Enter Password ' type="password" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>

                <div class="mt-3 text-center">
                    <button style={{ backgroundColor: '#4D869C' }} type="submit" class="btn text-light">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;

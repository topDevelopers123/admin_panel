import React from 'react'

function Email_verify() {
    return (
        <div>

            <div className='container'>
                <div class="mt-5 mb-5 text-center text-primary"><h2 style={{ color: '#7AB2B2' }}>Forget Password</h2></div>
                <div class="row g-5 d-flex justify-content-center align-items-center">
                  
                    <div class="col-4 ">
                        <input placeholder='Enter your email ' type="email"  class="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                <div class="mt-3 text-center">
                        <button style={{ backgroundColor: '#4D869C' }} type="submit" class="btn text-light">Verify Email</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Email_verify

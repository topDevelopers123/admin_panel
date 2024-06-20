import React from 'react'

function Otp_verify() {
    return (
        <div>
            <div className='container'>
                <div className="mt-5 mb-5 text-center text-primary"><h2 style={{ color: '#7AB2B2' }}>OTP Verification</h2></div>
                <div className="row g-5 d-flex justify-content-center align-items-center">

                    <div className="col-4 text-center ">
                        <input placeholder='Enter here ' type="text" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="mt-3 text-center">
                        <button style={{ backgroundColor: '#4D869C' }} type="submit" className="btn text-light">Verify OTP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp_verify

import React from 'react'

function New_password() {
    return (
        <div>
            <div className='container'>
                <div className="mt-5 mb-5 text-center text-primary"><h2 style={{ color: '#7AB2B2' }}>Create New Password</h2></div>
                <div className="row g-5 d-flex justify-content-center align-items-center">
                    <div className="col-4 text-center ">
                        <input placeholder='New Password ' type="text" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div className="row mt-0 g-5 d-flex justify-content-center align-items-center">
                    <div className="col-4 text-center ">
                        <input placeholder='Confirm Password ' type="text" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
               
                <div className="mt-3 text-center">
                    <button style={{ backgroundColor: '#4D869C' }} type="submit" className="btn text-light">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default New_password

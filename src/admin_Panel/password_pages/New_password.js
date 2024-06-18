import React from 'react'

function New_password() {
    return (
        <div>
            <div className='container'>
                <div class="mt-5 mb-5 text-center text-primary"><h2 style={{ color: '#7AB2B2' }}>Create New Password</h2></div>
                <div class="row g-5 d-flex justify-content-center align-items-center">
                    <div class="col-4 text-center ">
                        <input placeholder='New Password ' type="text" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div class="row mt-0 g-5 d-flex justify-content-center align-items-center">
                    <div class="col-4 text-center ">
                        <input placeholder='Confirm Password ' type="text" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
               
                <div class="mt-3 text-center">
                    <button style={{ backgroundColor: '#4D869C' }} type="submit" class="btn text-light">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default New_password

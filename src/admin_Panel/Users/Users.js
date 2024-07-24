import React from 'react'
import { Link } from 'react-router-dom'
import { useOrderAuthContext, useUserAuthContext } from '../../Context/index.context'
import Loader from '../Loader/Loader'

function Users() {
    const { users, disable, page, setPage } = useUserAuthContext()


    if (disable) return <Loader className="w-100 h-[100vh] flex justify-center items-center" />

    return (
        <div>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="javascript:;"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Users</li>
                                </ol>
                            </nav>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-body">
                          
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>E-mail </th>
                                            <th>Mobile Number </th>
                                            <th>Create Account </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((item) => (
                                            <tr>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.phone}
                                                    </div>
                                                </td>
                                                <td>

                                                    <div className="ms-2">
                                                        {item?.createdAt?.split("T")[0].replaceAll("-", "/")}
                                                    </div>
                                                </td>
                                               
                                            </tr>

                                    ))} 



                                    </tbody>
                                </table>

                                <nav aria-label="..." className=' flex justify-center items-center'>
                                    <ul className="pagination m-0 my-3">
                                        <li className="page-item ">
                                            <button className="page-link" disabled={disable} onClick={() => setPage((prev) => prev < 2 ? 1 : prev - 1)} >Previous</button>
                                        </li>

                                        <li className="page-item active">
                                            <a className="page-link" >{page}</a>
                                        </li>


                                        <li className="page-item">
                                            <button className="page-link" disabled={disable || users?.length < 9} onClick={() => setPage((prev) => prev + 1)}>Next</button>
                                        </li>

                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Users
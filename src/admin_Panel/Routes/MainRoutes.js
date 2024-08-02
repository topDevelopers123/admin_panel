import React from 'react'
import { useAuthContext } from '../../Context/index.context'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Index from '../index/Index'
import PrivateRoutes from './PrivateRoutes'
import Login from '../Login/Login'

function MainRoutes() {
  const { authorizeToken } = useAuthContext()
  // console.log(authorizeToken);
  return (
    <Routes>
      <Route element={<Layout />}>
        {
          authorizeToken && PrivateRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))
        }

      </Route>
        <Route path='/' element={<Login />} />

    </Routes>
  )
}

export default MainRoutes
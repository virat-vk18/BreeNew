import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const logged = JSON.parse(localStorage.getItem('token'))
  return logged ? <Outlet /> : <Navigate to={'/connect-wallet'} />
}

export default PrivateRouter
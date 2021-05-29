import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../lib/auth'
import { loadBooks, loadReading, loadFinished } from '../../Redux/Actions/bookActions'
import Header from './Header'
import Sidebar from './Sidebar'
const PageLayout = ({ children }) => {

  const dispatch = useDispatch();
  const  {user}  = useAuth();
  useEffect(() => {
      dispatch(loadBooks());
      dispatch(loadReading(user.email));
      dispatch(loadFinished(user.email));
  }, [dispatch, user.email])

  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 my-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout

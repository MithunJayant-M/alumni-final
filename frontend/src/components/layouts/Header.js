import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import { Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
      <nav className="navbar d-flex justify-content-between align-items-center px-4 ">
      {/* Logo Section */}
      <div className="navbar-brand">
          {isAuthenticated ? (
            <>
            {user.role ==='admin' &&(
              <Link to="/admin/adminrules" className="d-flex align-items-center">
                  <img width="70px" alt="ALUMNI LOGO" src="https://stjosephs.ac.in/assets/images/Engg%20Logo1.png" />
                  <span className="ml-2">St. Joseph's College of Engineering</span>
              </Link>)}
              {user.role ==='user-verified' &&( 
              <Link to="/userrules" className="d-flex align-items-center">
                  <img width="70px" alt="ALUMNI LOGO" src="https://stjosephs.ac.in/assets/images/Engg%20Logo1.png" />
                  <span className="ml-2">St. Joseph's College of Engineering</span>
              </Link>)}
              </>
          ) : (
              <Link to="/" className="d-flex align-items-center">
                  <img width="70px" alt="ALUMNI LOGO" src="https://stjosephs.ac.in/assets/images/Engg%20Logo1.png" />
                  <span className="ml-2">St. Joseph's College of Engineering</span>
              </Link>
          )}
      </div>

      {/* Right-aligned Navigation Items */}
      <div className="d-flex align-items-center text-white">
          {isAuthenticated && (
              <>
                  {user.role === 'admin' && (
                      <Link to="/admin/dashboard" className="nav-link text-white mx-3">
                          Dashboard
                      </Link>
                  )}
                  {user.role === 'admin' && (
                    <Link to="/admin/products" className='nav-link text-white mx-3'>
                        Alumni List
                    </Link>
                  )}
                  {user.role === 'user-verified' && (
                    <Link to ="/home" className='nav-link text-white mx-3'>
                      Alumni List 
                      </Link>
                  )}
                  <Link to={user.role === 'admin' ? "/admin/orders" : "/orders"} className="nav-link text-white mx-3">
                      Community Page
                  </Link>
                  <Link to="/myprofile" className="nav-link text-white mx-3">
                      Profile
                  </Link>
                  <button onClick={logoutHandler} className="btn btn-danger mx-3">
                      Logout
                  </button>
              </>
          )}
          {!isAuthenticated && (
              <Link to="/login" className="btn btn-primary mx-3" id="login_btn">
                  Login
              </Link>
          )}

          {/* User Avatar */}
          {isAuthenticated && (
              <div className="d-flex align-items-center">
                  <figure className="avatar avatar-nav mb-0">
                      <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} className="rounded-circle" />
                  </figure>
                  <span className="ml-2">{user.name}</span>
              </div>
          )}
      </div>
  </nav>
    )
}
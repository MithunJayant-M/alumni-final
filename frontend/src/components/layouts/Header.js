import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
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
    <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            {isAuthenticated?
            <Link to="/home">
            <img width="70px" alt='ALUMNI LOGO' src="https://stjosephs.ac.in/assets/images/Engg%20Logo1.png" />
            St.Joseph's College of Engineering
          </Link>:<Link to="/">
              <img width="70px" alt='ALUMNI LOGO' src="https://stjosephs.ac.in/assets/images/Engg%20Logo1.png" />
              St.Joseph's College of Engineering
            </Link>}
            
            </div>
        </div>
        {/* { isAuthenticated ? 
        <div className="col-12 col-md-5 mt-2 mt-md-0">
           <Search/>
        </div>:<div></div>
        }   */}
        <div className="col-12 col-md-3 mt-5 mt-md-0 text-center">
          { isAuthenticated ? 
            (

              <Dropdown className='d-inline'>
                  <Dropdown.Toggle variant='default text-white pr-5 ' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle >
                  <Dropdown.Menu >
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      {/* <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item> */}
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn mt-5" id="login_btn">Login</Link>
          }
          
        </div>
    </nav>
    )
}
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><i className="fa fa-columns"></i> Dashboard</Link>
                </li>
        
                <li>
                    <NavDropdown title={
                        <i className='fa fa-user '>  Alumni</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} > <i className='fa fa-shopping-basket'> Alumni List</i></NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products/create')} > <i className='fa fa-plus'> Create Alumni</i></NavDropdown.Item>
                    </NavDropdown>
                </li>

                <li>
                    <Link to="/admin/orders"><i className="fa fa-comments"></i> Community Page</Link>
                </li>

                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>

                {/* <li>
                    <Link to="/admin/reviews"><i className="fa fa-users"></i> Reviews</Link>
                </li> */}
        
            </ul>
            </nav>
        </div>
    )
}
import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileDetail from './components/product/ProfileDetail';
import ProfileSearch from './components/product/ProfileSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect, useState } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import axios from 'axios';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import Dashboard from './components/admin/Dashboard';
import ProfileList from './components/admin/ProfileList';
import NewProfile from './components/admin/NewProfiles';
import Updateprofiles from './components/admin/Updateprofiles';
// import OrderList from './components/admin/OrderList';
// import UpdateOrder from './components/admin/UpdateOrder';
import UserList from './components/admin/UserList';
import UpdateUser from './components/admin/UpdateUser';
// import ReviewList from './components/admin/ReviewList';
import LandingPage from './components/LandingPage';
import Note from './pages/Home/Notes';
import Dash from './components/admin/ChartDash';
import UserRulesPage from './components/user/UserRulesPage';
import AdminRulesPage from './components/admin/AdminRulesPage';

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("")
  useEffect(() => {
    store.dispatch(loadUser)
    async function getStripeApiKey(){
      const {data} = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()
  },[])

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
            <Header/>
                <div className='container container-fluid'>
                  <ToastContainer theme='dark' />
                  <Routes>
                      <Route path='/' element={<LandingPage/>}/>
                      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
                      <Route path='/userrules' element={<ProtectedRoute><UserRulesPage/></ProtectedRoute>} />
                      <Route path='/search/:keyword' element={<ProfileSearch/>} />
                      <Route path='/product/:id' element={<ProfileDetail/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/register' element={<Register/>} />
                      <Route path='/orders' element={<ProtectedRoute><Note/></ProtectedRoute>}/>
                      <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute> } />
                      <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute> } />
                      <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute> } />
                      <Route path='/password/forgot' element={<ForgotPassword/> } />
                      <Route path='/password/reset/:token' element={<ResetPassword/> } /> 
                  </Routes>
                </div>
                {/* Admin Routes */}
                <Routes>
                  <Route path='/admin/dashboard' element={ <ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute> } />
                  <Route path='/admin/adminrules' element={ <ProtectedRoute isAdmin={true}><AdminRulesPage/></ProtectedRoute> } />
                  <Route path='/admin/products' element={ <ProtectedRoute isAdmin={true}><ProfileList/></ProtectedRoute> } />
                  <Route path='/admin/products/create' element={ <ProtectedRoute isAdmin={true}><NewProfile/></ProtectedRoute> } />
                  <Route path='/admin/products/:id' element={ <ProtectedRoute isAdmin={true}><Updateprofiles/></ProtectedRoute> } />
                  <Route path='/admin/orders' element={ <ProtectedRoute isAdmin={true}><Note/></ProtectedRoute> } />
                  <Route path='/admin/dash' element={<ProtectedRoute isAdmin={true}><Dash/></ProtectedRoute>}/>
                  {/* <Route path="/admin/order" element={ <ProtectedRoute isAdmin={true}><Blogdetail/></ProtectedRoute>}/>
                  <Route path='/admin/order/:id' element={ <ProtectedRoute isAdmin={true}><UpdateOrder/></ProtectedRoute> } /> */}
                  <Route path='/admin/users' element={ <ProtectedRoute isAdmin={true}><UserList/></ProtectedRoute> } />
                  <Route path='/admin/user/:id' element={ <ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute> } />
                </Routes>
            <Footer/>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;

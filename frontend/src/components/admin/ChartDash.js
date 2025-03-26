// import React from 'react'
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
//  import 
//  { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';

// function ChartDash() {

//     const data = [
//         {
//           name: 'Page A',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];
     

//   return (
//     <main className='main-container'>
//         <div className='main-title'>
//             <h3>DASHBOARD</h3>
//         </div>

//         <div className='main-cards'>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>PRODUCTS</h3>
//                     <BsFillArchiveFill className='card_icon'/>
//                 </div>
//                 <h1>300</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CATEGORIES</h3>
//                     <BsFillGrid3X3GapFill className='card_icon'/>
//                 </div>
//                 <h1>12</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CUSTOMERS</h3>
//                     <BsPeopleFill className='card_icon'/>
//                 </div>
//                 <h1>33</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>ALERTS</h3>
//                     <BsFillBellFill className='card_icon'/>
//                 </div>
//                 <h1>42</h1>
//             </div>
//         </div>

//         <div className='charts'>
//             <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//                 </BarChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//         </div>
//     </main>
//   )
// }

// export default ChartDash


// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// function ChartDash() {
//     const { profiles = [], loading = true, error, isdeleteProfileSuccess } = useSelector(state => state.profileState);
//     const data = [
//             // {
//             //     label: "Profile Thumbnail",
//             //     field: "profileThumbnail",
//             //     sort: "asc"
//             // },
//             {
//                 label: "Full Name",
//                 field: "fullName",
//                 sort: "asc"
//             },
//             {
//                 label: "Location Area",
//                 field: "locationArea",
//                 sort: "asc"
//             },
//             {
//                 label: "Company Name",
//                 field: "CompanyName",
//                 sort: "asc"
//             },
//             {
//                 label: "Job Title",
//                 field: "jobTitle",
//                 sort: "asc"
//             },
//             {
//                 label: "Profile URL",
//                 field: "profileURL",
//                 sort: "asc"
//             },
            
//             {
//                 label: "Actions",
//                 field: "actions",
//                 sort: "asc"
//             }
//         ];
//     return (
//         <main className='main-container'>
//             <div className='main-title'>
//                 <h3>DASHBOARD</h3>
//             </div>

//             <div className='charts'>
//                 <h3>Location Area Chart</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="profile.LocationArea" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="profile.LocationArea" fill="#8884d8" />
//                         <Bar dataKey="CompanyName" fill="#82ca9d" />
//                     </BarChart>
//                 </ResponsiveContainer>

//                 <h3>Company Name Chart</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="CompanyName" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>
//         </main>
//     );
// }

// export default ChartDash;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import DataTable from 'react-data-table-component';

// function ChartDash() {
//     const { profiles = [], loading = true, error, isdeleteProfileSuccess } = useSelector(state => state.profileState);

//     const columns = [
//         {
//             name: 'Full Name',
//             selector: profiles.forEach(profile => profile.FullName || 'N/A'),
//             sortable: true,
//         },
//         {
//             name: 'Location Area',
//             selector: profiles.forEach(profile=> profile.LocationArea || 'N/A'),
//             sortable: true,
//         },
//         {
//             name: 'Headline',
//             selector: profiles.forEach(profile => profile.Headline || 'N/A'),
//             sortable: true,
//         },
//         {
//             name: 'Job Title',
//             selector: profiles.forEach(profile=> profile.JobTitle || 'N/A'),
//             sortable: true,
//         },
//         {
//             name: 'Profile URL',
//             selector: profiles.forEach(profile => profile.ProfileURL ? <a href={profile.ProfileURL} target="_blank" rel="noopener noreferrer">View Profile</a> : 'N/A'),
//             sortable: true,
//         },
//     ];

//     return (
//         <main className='main-container'>
//             <div className='main-title'>
//                 <h3>DASHBOARD</h3>
//             </div>

//             <div className='data-table'>
//                 <h3>Company & Location List</h3>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : error ? (
//                     <p>Error: {error}</p>
//                 ) : (
//                     <DataTable
//                         columns={columns}
//                         data={profiles}
//                         pagination
//                         highlightOnHover
//                     />
//                 )}
//             </div>
//         </main>
//     );
// }

// export default ChartDash;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,Line,LineChart,Pie,PieChart,Cell } from 'recharts';
import { getProfiles } from '../../actions/profileActions';
import { FaDisplay } from 'react-icons/fa6';
import Sidebar from './Sidebar';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733', '#C70039', '#900C3F', '#581845'];
function ChartDash() {
    const dispatch = useDispatch();
    const { profiles = [], loading, error } = useSelector(state => state.profileState);

    // Fetch profiles when component mounts
    useEffect(() => {
        dispatch(getProfiles());
    }, [dispatch]);

    console.log("Profiles Data:", profiles);

    // Transform profiles data into location counts
    const locationData = Object.values(profiles.reduce((acc, profile) => {
        const location = profile.LocationArea || 'Unknown';
        acc[location] = acc[location] || { name: location, count: 0 };
        acc[location].count += 1;
        return acc;
    }, {}));
    const companyData = Object.values(profiles.reduce((acc, profile) => {
        const company = profile.CompanyName?.trim() || 'Unknown';
        acc[company] = acc[company] || { name: company, count: 0 };
        acc[company].count += 1;
        return acc;
    }, {}));
    console.log("Company Data:", companyData);
    return (
<div className="row">
  {/* Sidebar */}
  <div className="col-12 col-md-2">
    <Sidebar />
  </div>

  {/* Main Content */}
  <main className="col-12 col-md-10 main-container">
    <div className="main-title">
      <h3>DASHBOARD BASED ON THE LOCATION OF THE ALUMNI</h3>
    </div>

    <div className="charts-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : locationData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <>
          <h3>Profiles by Location Area</h3><br />
          <div className="charts">
            {/* Top Chart */}
            <div className="chart-box">
              <ResponsiveContainer width="200%" height={300}>
                <BarChart data={locationData} margin={{ top: 10, right: 30, left: 10, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-80} 
                    textAnchor="end" 
                    interval={0} 
                    height={70}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Bottom Chart */}
            {/* <div className="chart-box">
              <ResponsiveContainer width="200%" height={300}>
                <BarChart data={companyData} margin={{ top: 10, right: 30, left: 10, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-80} 
                    textAnchor="end" 
                    interval={0} 
                    height={70} 
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#4caf50" barSize={40}>
                    {companyData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          </div>
        </>
      )}
    </div>
  </main>
</div>
    );
}

export default ChartDash;

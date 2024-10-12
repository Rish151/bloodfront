import React, { useState } from 'react';
import './Donors.css';
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const donorsData = [
  { id: 1, name: 'Aarav', available: 'Available', mobile: '9876543210', bloodGroup: 'A+', age: 30, weight: '75kg', email: 'aarav@gmail.com', country: 'India', city: 'Mumbai', state: 'Maharashtra', district: 'Mumbai', disease: 'None' },
  { id: 2, name: 'Vivaan', available: 'Unavailable', mobile: '9876543211', bloodGroup: 'AB+', age: 25, weight: '68kg', email: 'vivaan@gmail.com', country: 'India', city: 'Delhi', state: 'Delhi', district: 'Central Delhi', disease: 'None' },
  { id: 3, name: 'Aditya', available: 'Available', mobile: '9876543212', bloodGroup: 'B+', age: 29, weight: '82kg', email: 'aditya@gmail.com', country: 'India', city: 'Bengaluru', state: 'Karnataka', district: 'Bengaluru', disease: 'None' },
  { id: 4, name: 'Vihaan', available: 'Available', mobile: '9876543213', bloodGroup: 'O-', age: 27, weight: '70kg', email: 'vihaan@gmail.com', country: 'India', city: 'Hyderabad', state: 'Telangana', district: 'Hyderabad', disease: 'None' },
  { id: 5, name: 'Kabir', available: 'Unavailable', mobile: '9876543214', bloodGroup: 'A-', age: 22, weight: '60kg', email: 'kabir@gmail.com', country: 'India', city: 'Ahmedabad', state: 'Gujarat', district: 'Ahmedabad', disease: 'None' },
  { id: 6, name: 'Reyansh', available: 'Available', mobile: '9876543215', bloodGroup: 'B+', age: 34, weight: '85kg', email: 'reyansh@gmail.com', country: 'India', city: 'Chennai', state: 'Tamil Nadu', district: 'Chennai', disease: 'None' },
  { id: 7, name: 'Rohan', available: 'Unavailable', mobile: '9876543216', bloodGroup: 'AB-', age: 28, weight: '77kg', email: 'rohan@gmail.com', country: 'India', city: 'Pune', state: 'Maharashtra', district: 'Pune', disease: 'None' },
  { id: 8, name: 'Arjun', available: 'Available', mobile: '9876543217', bloodGroup: 'O+', age: 26, weight: '73kg', email: 'arjun@gmail.com', country: 'India', city: 'Jaipur', state: 'Rajasthan', district: 'Jaipur', disease: 'None' },
  { id: 9, name: 'Shivansh', available: 'Unavailable', mobile: '9876543218', bloodGroup: 'A+', age: 31, weight: '78kg', email: 'shivansh@gmail.com', country: 'India', city: 'Kolkata', state: 'West Bengal', district: 'Kolkata', disease: 'None' },
  { id: 10, name: 'Lakshay', available: 'Available', mobile: '9876543219', bloodGroup: 'B-', age: 24, weight: '66kg', email: 'lakshay@gmail.com', country: 'India', city: 'Lucknow', state: 'Uttar Pradesh', district: 'Lucknow', disease: 'None' },
  { id: 11, name: 'Krishna', available: 'Unavailable', mobile: '9876543220', bloodGroup: 'AB+', age: 29, weight: '74kg', email: 'krishna@gmail.com', country: 'India', city: 'Bhopal', state: 'Madhya Pradesh', district: 'Bhopal', disease: 'None' },
  { id: 12, name: 'Samarth', available: 'Available', mobile: '9876543221', bloodGroup: 'O+', age: 32, weight: '80kg', email: 'samarth@gmail.com', country: 'India', city: 'Visakhapatnam', state: 'Andhra Pradesh', district: 'Visakhapatnam', disease: 'None' },
  { id: 13, name: 'Siddharth', available: 'Unavailable', mobile: '9876543222', bloodGroup: 'A-', age: 20, weight: '58kg', email: 'siddharth@gmail.com', country: 'India', city: 'Surat', state: 'Gujarat', district: 'Surat', disease: 'None' },
  { id: 14, name: 'Kartik', available: 'Available', mobile: '9876543223', bloodGroup: 'B+', age: 27, weight: '69kg', email: 'kartik@gmail.com', country: 'India', city: 'Nagpur', state: 'Maharashtra', district: 'Nagpur', disease: 'None' },
  { id: 15, name: 'Dhruv', available: 'Available', mobile: '9876543224', bloodGroup: 'AB-', age: 23, weight: '65kg', email: 'dhruv@gmail.com', country: 'India', city: 'Indore', state: 'Madhya Pradesh', district: 'Indore', disease: 'None' },
  { id: 16, name: 'Shreyas', available: 'Unavailable', mobile: '9876543225', bloodGroup: 'O-', age: 21, weight: '59kg', email: 'shreyas@gmail.com', country: 'India', city: 'Coimbatore', state: 'Tamil Nadu', district: 'Coimbatore', disease: 'None' },
  { id: 17, name: 'Yash', available: 'Available', mobile: '9876543226', bloodGroup: 'A+', age: 30, weight: '72kg', email: 'yash@gmail.com', country: 'India', city: 'Nashik', state: 'Maharashtra', district: 'Nashik', disease: 'None' },
  { id: 18, name: 'Karan', available: 'Unavailable', mobile: '9876543227', bloodGroup: 'B+', age: 26, weight: '71kg', email: 'karan@gmail.com', country: 'India', city: 'Noida', state: 'Uttar Pradesh', district: 'Gautam Buddh Nagar', disease: 'None' },
  { id: 19, name: 'Anirudh', available: 'Available', mobile: '9876543228', bloodGroup: 'AB+', age: 28, weight: '75kg', email: 'anirudh@gmail.com', country: 'India', city: 'Thane', state: 'Maharashtra', district: 'Thane', disease: 'None' },
  { id: 20, name: 'Nishant', available: 'Unavailable', mobile: '9876543229', bloodGroup: 'O-', age: 35, weight: '80kg', email: 'nishant@gmail.com', country: 'India', city: 'Gurgaon', state: 'Haryana', district: 'Gurgaon', disease: 'None' },
  { id: 21, name: 'Parth', available: 'Available', mobile: '9876543230', bloodGroup: 'A-', age: 22, weight: '62kg', email: 'parth@gmail.com', country: 'India', city: 'Faridabad', state: 'Haryana', district: 'Faridabad', disease: 'None' },
  { id: 22, name: 'Abhinav', available: 'Available', mobile: '9876543231', bloodGroup: 'B+', age: 29, weight: '78kg', email: 'abhinav@gmail.com', country: 'India', city: 'Visakhapatnam', state: 'Andhra Pradesh', district: 'Visakhapatnam', disease: 'None' },
  { id: 23, name: 'Uttam', available: 'Unavailable', mobile: '9876543232', bloodGroup: 'A+', age: 31, weight: '74kg', email: 'uttam@gmail.com', country: 'India', city: 'Patna', state: 'Bihar', district: 'Patna', disease: 'None' },
  { id: 24, name: 'Ritesh', available: 'Available', mobile: '9876543233', bloodGroup: 'B-', age: 24, weight: '66kg', email: 'ritesh@gmail.com', country: 'India', city: 'Vadodara', state: 'Gujarat', district: 'Vadodara', disease: 'None' },
  { id: 25, name: 'Manish', available: 'Unavailable', mobile: '9876543234', bloodGroup: 'AB-', age: 27, weight: '70kg', email: 'manish@gmail.com', country: 'India', city: 'Bhubaneswar', state: 'Odisha', district: 'Khordha', disease: 'None' },
  { id: 26, name: 'Suresh', available: 'Available', mobile: '9876543235', bloodGroup: 'O+', age: 33, weight: '82kg', email: 'suresh@gmail.com', country: 'India', city: 'Kochi', state: 'Kerala', district: 'Ernakulam', disease: 'None' },
  { id: 27, name: 'Kunal', available: 'Unavailable', mobile: '9876543236', bloodGroup: 'A-', age: 29, weight: '75kg', email: 'kunal@gmail.com', country: 'India', city: 'Mysuru', state: 'Karnataka', district: 'Mysuru', disease: 'None' },
  { id: 28, name: 'Gaurav', available: 'Available', mobile: '9876543237', bloodGroup: 'AB+', age: 26, weight: '78kg', email: 'gaurav@gmail.com', country: 'India', city: 'Agra', state: 'Uttar Pradesh', district: 'Agra', disease: 'None' },
  { id: 29, name: 'Manoj', available: 'Unavailable', mobile: '9876543238', bloodGroup: 'O-', age: 34, weight: '80kg', email: 'manoj@gmail.com', country: 'India', city: 'Jaipur', state: 'Rajasthan', district: 'Jaipur', disease: 'None' },
  { id: 30, name: 'Rahul', available: 'Available', mobile: '9876543239', bloodGroup: 'B+', age: 23, weight: '65kg', email: 'rahul@gmail.com', country: 'India', city: 'Patna', state: 'Bihar', district: 'Patna', disease: 'None' },
];

const Donors = () => {
  const [page, setPage] = useState(1);
  const [bloodGroupFilter, setBloodGroupFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const donorsPerPage = 4;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleConnect = (donor) => {
    setSelectedDonor(donor);
    setOpenModal(true);
  };

  const filteredDonors = donorsData.filter(donor => {
    return (
      (bloodGroupFilter === '' || donor.bloodGroup === bloodGroupFilter) &&
      (countryFilter === '' || donor.country === countryFilter) &&
      (stateFilter === '' || donor.state === stateFilter) &&
      (districtFilter === '' || donor.district === districtFilter) &&
      (cityFilter === '' || donor.city === cityFilter)
    );
  });

  const startIndex = (page - 1) * donorsPerPage;
  const selectedDonors = filteredDonors.slice(startIndex, startIndex + donorsPerPage);

  return (
    <div className="donors-container">
      <div className="banner">
        <h2>Find Blood Donor</h2>
        <div className="filters">
          <select value={bloodGroupFilter} onChange={(e) => setBloodGroupFilter(e.target.value)}>
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
            <option value="">Country</option>
            <option value="Country A">India</option>
            <option value="Country B">USA</option>
            <option value="Country C">UK</option>
            <option value="Country D">UAE</option>
          </select>
          <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
            <option value="">State</option>
            <option value="State A">Haryana</option>
            <option value="State B">Calforina</option>
            <option value="State C">London</option>
            <option value="State D">Dubai</option>
          </select>
          <select value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)}>
            <option value="">District</option>
            <option value="District A">Faridabad</option>
            <option value="District B">Faridabad</option>
            <option value="District C">Faridabad</option>
            <option value="District D">Faridabad</option>
          </select>
          <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
            <option value="">City</option>
            <option value="City A">City A</option>
            <option value="City B">City B</option>
            <option value="City C">City C</option>
            <option value="City D">City D</option>
          </select>
          <button>Search</button>
        </div>
      </div>
      <div className="table-container">
        <table className="donors-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Availability</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedDonors.map(donor => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.available}</td>
                <td>{donor.mobile}</td>
                <td>
                  <button className="connect-button" onClick={() => handleConnect(donor)}>Connect</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={Math.ceil(filteredDonors.length / donorsPerPage)}
          page={page}
          onChange={handleChange}
          className="pagination"
        />
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          {selectedDonor && (
            <div>
              <h3 id="modal-title">Donor Details</h3>
              <p><strong>Full Name:</strong> {selectedDonor.name}</p>
              <p><strong>Blood Group:</strong> {selectedDonor.bloodGroup}</p>
              <p><strong>Age:</strong> {selectedDonor.age}</p>
              <p><strong>Mobile No:</strong> {selectedDonor.mobile}</p>
              <p><strong>Weight:</strong> {selectedDonor.weight}</p>
              <p><strong>Email:</strong> {selectedDonor.email}</p>
              <p><strong>City:</strong> {selectedDonor.city}</p>
              <p><strong>State:</strong> {selectedDonor.state}</p>
              <p><strong>District:</strong> {selectedDonor.district}</p>
              <p><strong>Country:</strong> {selectedDonor.country}</p>
              <p><strong>Disease:</strong> {selectedDonor.disease}</p>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Donors;

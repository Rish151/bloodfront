import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './AdminProspects.css';

const initialProspects = [
  { id: 1, name: 'Rishab', email: 'rishab@gmail.com', address: 'Sec-16 Faridabad, INDIA', bloodtype: 'O+', diseases: 'None', weight: '70kg', date: '2024-08-20', phone: '123-456-7890' },
  { id: 2, name: 'Aarav', email: 'aarav@gmail.com', address: ' NIT-2 Faridabad, INDIA', bloodtype: 'A+', diseases: 'None', weight: '75kg', date: '2024-08-22', phone: '234-567-8901' },
  { id: 3, name: 'Meera', email: 'meera@gmail.com', address: ' Sec-19 Faridabad, INDIA', bloodtype: 'B+', diseases: 'None', weight: '65kg', date: '2024-08-25', phone: '345-678-9012' },
  { id: 4, name: 'Ananya', email: 'ananya@gmail.com', address: 'House No.123 Faridabad, INDIA', bloodtype: 'AB+', diseases: 'Diabetes', weight: '68kg', date: '2024-08-28', phone: '456-789-0123' },
  { id: 5, name: 'Rahul', email: 'rahul@gmail.com', address: 'NIT-5 Faridabad, INDIA', bloodtype: 'O-', diseases: 'Hypertension', weight: '80kg', date: '2024-09-01', phone: '567-890-1234' },
  { id: 6, name: 'Ishita', email: 'ishita@gmail.com', address: '30 Faridabad, INDIA', bloodtype: 'A-', diseases: 'None', weight: '55kg', date: '2024-09-05', phone: '678-901-2345' },
  { id: 7, name: 'Vikram', email: 'vikram@gmail.com', address: '2655 Faridabad, INDIA', bloodtype: 'B-', diseases: 'Asthma', weight: '72kg', date: '2024-09-10', phone: '789-012-3456' },
  { id: 8, name: 'Kavya', email: 'kavya@gmail.com', address: '505 Faridabad, INDIA', bloodtype: 'AB-', diseases: 'None', weight: '60kg', date: '2024-09-12', phone: '890-123-4567' },
  { id: 9, name: 'Siddharth', email: 'siddharth@gmail.com', address: 'Sec-43 Faridabad, INDIA', bloodtype: 'O+', diseases: 'None', weight: '78kg', date: '2024-09-15', phone: '901-234-5678' },
  { id: 10, name: 'Priya', email: 'priya@gmail.com', address: '70 Faridabad, INDIA', bloodtype: 'A+', diseases: 'None', weight: '58kg', date: '2024-09-18', phone: '012-345-6789' }
];

const AdminProspects = ({ onApprove }) => {
  const [prospects, setProspects] = useState(initialProspects);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingProspect, setEditingProspect] = useState(null);
  const prospectsPerPage = 8;

  const indexOfLastProspect = currentPage * prospectsPerPage;
  const indexOfFirstProspect = indexOfLastProspect - prospectsPerPage;
  const currentProspects = prospects.slice(indexOfFirstProspect, indexOfLastProspect);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleApprove = (prospect) => {
    onApprove(prospect); 
    const updatedProspects = prospects.filter(p => p.id !== prospect.id);
    setProspects(updatedProspects);
  };

  return (
    <div className="admin-prospects">
      <div className="header">
        <h1>All Prospects</h1>
        <button className="add-prospect-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'New Prospect'}
        </button>
      </div>

      {showForm && (
        <div className="prospect-form">
          <h2>{editingProspect ? 'Edit Prospect' : 'Add New Prospect'}</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editingProspect?.name || ''}
                onChange={(e) => setEditingProspect({ ...editingProspect, name: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editingProspect?.email || ''}
                onChange={(e) => setEditingProspect({ ...editingProspect, email: e.target.value })}
              />
            </label>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      )}

      <table className="prospects-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Blood Type</th>
            <th>Diseases</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProspects.map(prospect => (
            <tr key={prospect.id}>
              <td>{prospect.id}</td>
              <td>{prospect.name}</td>
              <td>{prospect.email}</td>
              <td>{prospect.address}</td>
              <td>{prospect.bloodtype}</td>
              <td>{prospect.diseases}</td>
              <td>
                <button className="approve-button" onClick={() => handleApprove(prospect)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Stack spacing={2} alignItems="center">
        <Pagination
          count={Math.ceil(prospects.length / prospectsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => <FontAwesomeIcon icon={faChevronLeft} />,
                next: () => <FontAwesomeIcon icon={faChevronRight} />
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default AdminProspects;

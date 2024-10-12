import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEdit,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AdminProspects from "../AdminProspects/AdminProspects";
import "./AdminDonors.css";

const initialDonors = [
    { id: 1, name: "Amit Sharma", email: "amit.sharma@gmail.com", address: "45 MG Road, Mumbai", bloodtype: "O+", diseases: "None", weight: "70kg", date: "2024-08-20", phone: "9876543210", age: 30 },
    { id: 2, name: "Priya Gupta", email: "priya.gupta@gmail.com", address: "12 Park Street, Delhi", bloodtype: "A-", diseases: "None", weight: "60kg", date: "2024-08-18", phone: "8765432109", age: 28 },
    { id: 3, name: "Rahul Verma", email: "rahul.verma@gmail.com", address: "78 Nehru Nagar, Bangalore", bloodtype: "B+", diseases: "Hypertension", weight: "80kg", date: "2024-08-25", phone: "7654321098", age: 35 },
    { id: 4, name: "Sneha Patel", email: "sneha.patel@gmail.com", address: "22 Marine Drive, Mumbai", bloodtype: "AB+", diseases: "None", weight: "55kg", date: "2024-09-01", phone: "6543210987", age: 26 },
    { id: 5, name: "Vikram Singh", email: "vikram.singh@gmail.com", address: "5 Residency Road, Jaipur", bloodtype: "O-", diseases: "Diabetes", weight: "75kg", date: "2024-09-10", phone: "5432109876", age: 40 },
    { id: 6, name: "Anjali Desai", email: "anjali.desai@gmail.com", address: "89 Bannerghatta Road, Bangalore", bloodtype: "B-", diseases: "Asthma", weight: "62kg", date: "2024-09-15", phone: "4321098765", age: 29 },
    { id: 7, name: "Manish Chawla", email: "manish.chawla@gmail.com", address: "15 Connaught Place, Delhi", bloodtype: "A+", diseases: "None", weight: "85kg", date: "2024-09-20", phone: "3210987654", age: 32 },
    { id: 8, name: "Meena Iyer", email: "meena.iyer@gmail.com", address: "35 T. Nagar, Chennai", bloodtype: "AB-", diseases: "None", weight: "58kg", date: "2024-09-22", phone: "2109876543", age: 27 },
    { id: 9, name: "Rohan Kapoor", email: "rohan.kapoor@gmail.com", address: "50 Park Circus, Kolkata", bloodtype: "O+", diseases: "None", weight: "72kg", date: "2024-09-30", phone: "1098765432", age: 33 },
    { id: 10, name: "Nisha Thakur", email: "nisha.thakur@gmail.com", address: "77 Civil Lines, Pune", bloodtype: "B+", diseases: "None", weight: "65kg", date: "2024-10-05", phone: "9876543211", age: 25 },
    { id: 11, name: "Arjun Reddy", email: "arjun.reddy@gmail.com", address: "88 Jubilee Hills, Hyderabad", bloodtype: "A-", diseases: "None", weight: "80kg", date: "2024-10-08", phone: "8765432110", age: 34 }
  ];
  

const AdminDonors = () => {
  const [donors, setDonors] = useState(initialDonors);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingDonor, setEditingDonor] = useState(null);
  const donorsPerPage = 8;

  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleAddDonor = () => {
    setEditingDonor(null);
    setShowForm(!showForm);
  };

  const handleEdit = (donor) => {
    setEditingDonor(donor);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedDonors = donors.filter((donor) => donor.id !== id);
    setDonors(updatedDonors);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditingDonor((prevDonor) => ({
      ...prevDonor,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDonor) {
      const updatedDonors = donors.map((donor) =>
        donor.id === editingDonor.id ? editingDonor : donor
      );
      setDonors(updatedDonors);
    } else {
      setDonors([...donors, { ...editingDonor, id: donors.length + 1 }]);
    }
    setEditingDonor(null);
    setShowForm(false);
  };

  const handleAddProspect = (prospect) => {
    setDonors([...donors, { ...prospect, id: donors.length + 1 }]);
  };

  return (
    <div className="admin-donors">
      <div className="header">
        <h1>All Donors</h1>
        <button className="add-donor-button" onClick={handleAddDonor}>
          {showForm ? "Cancel" : "New Donor"}
        </button>
      </div>
      <AdminProspects onApprove={handleAddProspect} />
      {showForm && (
        <div className="donor-form">
          <h2>{editingDonor ? "Edit Donor" : "Add New Donor"}</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editingDonor?.name || ""}
              onChange={handleFormChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={editingDonor?.email || ""}
              onChange={handleFormChange}
              required
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={editingDonor?.address || ""}
              onChange={handleFormChange}
              required
            />
            <label>Blood Type</label>
            <select
              name="bloodtype"
              value={editingDonor?.bloodtype || ""}
              onChange={handleFormChange}
              required
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <label>Diseases</label>
            <input
              type="text"
              name="diseases"
              value={editingDonor?.diseases || ""}
              onChange={handleFormChange}
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={editingDonor?.phone || ""}
              onChange={handleFormChange}
              required
            />
            <label>Weight</label>
            <input
              type="text"
              name="weight"
              value={editingDonor?.weight || ""}
              onChange={handleFormChange}
              required
            />
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={editingDonor?.age || ""}
              onChange={handleFormChange}
              required
            />
            <button type="submit" className="submit-button">
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
          </form>
        </div>
      )}

      <table className="donors-table">
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
          {currentDonors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.id}</td>
              <td>{donor.name}</td>
              <td>{donor.email}</td>
              <td>{donor.address}</td>
              <td>{donor.bloodtype}</td>
              <td>{donor.diseases}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(donor)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(donor.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Stack spacing={2} alignItems="center">
        <Pagination
          count={Math.ceil(donors.length / donorsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => <FontAwesomeIcon icon={faChevronLeft} />,
                next: () => <FontAwesomeIcon icon={faChevronRight} />,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default AdminDonors;

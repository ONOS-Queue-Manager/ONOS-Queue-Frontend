import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ConfirmationDialog from '../components/ConfirmationDialog';
import EditForm from '../components/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/queueManage.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'; // Import Axios

const QueueManage = () => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (id) => {
    console.log(`Edit button clicked for ID: ${id}`);
    setSelectedItemId(id);
    setEditFormOpen(true);
  };

  const handleDeleteClick = (id) => {
    // Open the confirmation dialog
    setConfirmationOpen(true);
    setSelectedItemId(id);
  };

  const handleConfirmDelete = () => {
    console.log(`Delete confirmed for ID: ${selectedItemId}`);
    
    // Send DELETE request to the server
    axios.delete(`your-api-endpoint/${selectedItemId}`)
      .then(() => {
        // Remove the row with the selectedItemId
        const updatedRows = rows.filter((row) => row.id !== selectedItemId);
        setRows(updatedRows);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });

    // Close the confirmation dialog
    setConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    // Cancel the delete action
    setConfirmationOpen(false);
  };

  const handleInsertClick = () => {
    navigate('/insertQueue');
  };

  const handleEditFormSave = (editedData) => {
    console.log(`Save confirmed for ID: ${selectedItemId}`);
    
    // Send PUT request to update the data
    axios.put(`your-api-endpoint/${selectedItemId}`, editedData)
      .then(() => {
        // Update the row with the editedData
        const updatedRows = rows.map((row) => (row.id === selectedItemId ? editedData : row));
        setRows(updatedRows);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });

    // Close the edit form
    setEditFormOpen(false);
  };

  const handleEditFormCancel = () => {
    setEditFormOpen(false);
  };
  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'queueId', headerName: 'Queue ID', width: 130 },
    { field: 'maxRate', headerName: 'Max Rate', width: 150 },
    { field: 'minRate', headerName: 'Min Rate', width: 150 },
    { field: 'burst', headerName: 'Burst', width: 120 },
    { field: 'priority', headerName: 'Priority', width: 150 },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 220, 
      renderCell: (params) => (
        <div>
          <button type="button" className="btn btn-primary btn-sm btn-action" onClick={() => handleEditClick(params.row.id)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(params.row.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];
  
  
  const initialRows = [
    { id: uuidv4(), queueId: "myQueue2", maxRate: 1000, minRate: 1000, burst: 42, priority: 5, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue3", maxRate: 1000, minRate: 1000, burst: 16, priority: 4, action: 'Edit' },
    { id: uuidv4(), queueId: "myQueue4", maxRate: 1000, minRate: 1000, burst: null, priority: 3, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue5", maxRate: 1000, minRate: 1000, burst: 150, priority: 2, action: 'Edit' },
    { id: uuidv4(), queueId: "myQueue6", maxRate: 1000, minRate: 1000, burst: 44, priority: 1, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue7", maxRate: 1000, minRate: 1000, burst: 36, priority: 3, action: 'Edit' },
  ];

  

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '5%' }}>Flow Table</h2>

      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: '1%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginLeft: '10%',
        }}
        onClick={handleInsertClick}
      >
        Insert
      </Button>

      <div
        style={{
          height: 400,
          width: '80%',
          margin: '2% auto',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginLeft: '10%',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
        <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
       {isEditFormOpen && (
        <EditForm
          open={isEditFormOpen}
          onClose={handleEditFormCancel}
          onSave={handleEditFormSave}
          onCancel={handleEditFormCancel}
          rowData={rows.find((row) => row.id === selectedItemId)}
        />
      )}
      </div>
    </div>
  );
};

export default QueueManage;
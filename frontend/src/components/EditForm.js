// EditForm.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EditForm = ({ open, onClose, onSave, onCancel, rowData }) => {
  const [editedData, setEditedData] = useState({ ...rowData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(editedData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Entry ID {rowData.id}</DialogTitle>
      <DialogContent>
        <form>
        <TextField
            label="Queue ID"
            type="text"
            name="queueId"
            value={editedData.queueId}
            onChange={handleInputChange}
            fullWidth
            style={{ marginTop: '10px', marginBottom: '10px' }}
          />
          <TextField
            label="Max Rate"
            type="number"
            name="maxRate"
            value={editedData.maxRate}
            onChange={handleInputChange}
            fullWidth
            style={{ marginTop: '10px', marginBottom: '10px' }}
          />
          <TextField
            label="Min Rate"
            type="number"
            name="minRate"
            value={editedData.minRate}
            onChange={handleInputChange}
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Burst"
            type="number"
            name="burst"
            value={editedData.burst}
            onChange={handleInputChange}
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Priority"
            type="number"
            name="priority"
            value={editedData.priority}
            onChange={handleInputChange}
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          {/* Add other input fields as needed */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditForm;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Buttons from '../Buttons';

interface FilterDialogProps {
  open: boolean;
  onClose: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>過濾條件</DialogTitle>
      <DialogContent>
        <TextField
          label="標題"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Buttons content="取消" onClick={handleClose} />
        <Buttons content="新增" contained={true} onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;

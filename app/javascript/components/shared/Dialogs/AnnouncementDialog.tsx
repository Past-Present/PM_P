import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Buttons from '../Buttons';

interface AnnouncementDialogProps {
  open: boolean;
  onClose: () => void;
}

const AnnouncementDialog: React.FC<AnnouncementDialogProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    setTitle('');
    setContent('');
    onClose();
  };

  return (

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新增公告</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="標題"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="content"
          multiline={true}
          rows={10}
          label="內容"
          type="text"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Buttons content="取消" onClick={handleClose} />
        <Buttons content="新增" contained={true} onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};

export default AnnouncementDialog;
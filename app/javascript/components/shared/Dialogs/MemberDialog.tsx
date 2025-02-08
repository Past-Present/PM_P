import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Buttons from '../Buttons';

interface MemberDialogProps {
  open: boolean;
  onClose: () => void;
  isFullInfo?: boolean;
}

const MemberDialog: React.FC<MemberDialogProps> = ({ open, onClose, isFullInfo = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [discord, setDiscord] = useState('');
  const [instagram, setInstagram] = useState('');
  const [projects, setProjects] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [branch, setBranch] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [ibanCode, setIbanCode] = useState('');
  const [address, setAddress] = useState('');

  const handleClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setRole('');
    setDiscord('');
    setInstagram('');
    setProjects('');
    setAccountName('');
    setBankName('');
    setBankCode('');
    setBranch('');
    setAccountNumber('');
    setSwiftCode('');
    setIbanCode('');
    setAddress('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新增成員</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="姓名"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="email"
          label="電子郵件"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="phone"
          label="電話"
          type="tel"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          margin="dense"
          id="role"
          label="角色"
          type="text"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        {isFullInfo && (
          <>
            <TextField
              margin="dense"
              id="discord"
              label="Discord"
              type="text"
              fullWidth
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
            />
            <TextField
              margin="dense"
              id="instagram"
              label="Instagram"
              type="text"
              fullWidth
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <TextField
              margin="dense"
              id="projects"
              label="Projects"
              type="text"
              fullWidth
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
            />
            <TextField
              margin="dense"
              id="accountName"
              label="Account Name"
              type="text"
              fullWidth
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="bankName"
              label="Bank Name"
              type="text"
              fullWidth
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="bankCode"
              label="Bank Code"
              type="text"
              fullWidth
              value={bankCode}
              onChange={(e) => setBankCode(e.target.value)}
            />
            <TextField
              margin="dense"
              id="branch"
              label="Branch"
              type="text"
              fullWidth
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <TextField
              margin="dense"
              id="accountNumber"
              label="Account Number"
              type="text"
              fullWidth
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            <TextField
              margin="dense"
              id="swiftCode"
              label="SWIFT Code"
              type="text"
              fullWidth
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
            />
            <TextField
              margin="dense"
              id="ibanCode"
              label="IBAN Code"
              type="text"
              fullWidth
              value={ibanCode}
              onChange={(e) => setIbanCode(e.target.value)}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Buttons content="取消" onClick={handleClose} />
        <Buttons content="新增" contained={true} onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};

export default MemberDialog;

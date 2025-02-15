import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import Buttons from '../Buttons';
import Selected from '../Selected';


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
  const [suggestedPosition, setSuggestedPosition] = useState<string[]>([]);
  const [hopePosition, setHopePosition] = useState<string[]>([]);

  const [selectedTalentPool, setSelectedTalentPool] = useState("");

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
    setSuggestedPosition([]);
    setHopePosition([]);
    onClose();
  };

  const talentPoolInfo = [
    { id: 1, name: '張小明' },
    { id: 2, name: '李大明' },
    { id: 3, name: '王小明' },
  ]

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新增成員</DialogTitle>
      {
        !isFullInfo && (
        <div className='flex justify-between flex-col px-6'>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>現成人力</InputLabel>
            <Select
              label="現成人力"
              value={selectedTalentPool}
              onChange={(e) => {
                setSelectedTalentPool(e.target.value);
              }}
              fullWidth
            >
              {
                talentPoolInfo.map((info) => (
                  <MenuItem key={info.id} value={info.id}>{info.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <Divider>或</Divider>
        </div>
        )
      }
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
          {/* <FormControl fullWidth>
            <InputLabel id="suggested-position-label" sx={{ margin: '8px 0px 4px 0px' }}>建議職位</InputLabel>
            <Selected
              label="suggested-position-label"
              options={["導演", "構圖", "美術", "原畫", "動畫", "補間", "上色", "音樂", "後製", "背景"]}
              value={suggestedPosition}
              isMultiple={true}
              onChange={(value: string) =>      setSuggestedPosition([value])}
              sx={{ margin: '8px 0px 4px 0px', width: '100%' }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={{ margin: '8px 0px 4px 0px' }}>期望職位</InputLabel>
            <Selected
              options={["導演", "構圖", "美術", "原畫", "動畫", "補間", "上色", "音樂", "後製", "背景"]}
              value={hopePosition}
              isMultiple={true}
              onChange={(value: string) => setHopePosition([value])}
              sx={{ margin: '8px 0px 4px 0px', width: '100%' }}
            />
          </FormControl> */}
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

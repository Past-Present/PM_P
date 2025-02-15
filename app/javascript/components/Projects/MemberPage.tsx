import React, { useState } from 'react';
import CustomTable from './CustomTable';
import Selected from '../Shared/Selected';
import Tags from '../Shared/Tags';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Buttons from "../Shared/Buttons";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import MemberDialog from '../Shared/Dialogs/MemberDialog';

const MemberPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const data = [
    {
      "id": "1",
      "name": "張小明",
      "credit_name": "Xiao Ming Chang",
      "discord": "asdfg",
      "instagram": "afds",
      "position": ["動畫"],
    },
    {
      "id": "2",
      "name": "張小明",
      "credit_name": "Xiao Ming Chang",
      "discord": "asdfg",
      "instagram": "afds",
      "position": ["上色"],
    }
  ]

  interface TalentData {
    id: string;
    name: string;
    credit_name: string;
    discord: string;
    instagram: string;
    position: string[];
  }

  const columns = [
    { label: '', render: (row: TalentData) =>
      <>
        <IconButton size="small" aria-label="delete">
          <DeleteForeverIcon />
        </IconButton>
        <IconButton size="small" aria-label="edit">
          <EditIcon />
        </IconButton>
      </>
    },
    { label: '姓名', field: 'name' },
    { label: 'Credit 顯示姓名', field: 'credit_name' },
    { label: '職位', field: 'position' },
    { label: 'Discord', field: 'discord' },
    { label: 'Instagram', field: 'instagram' },
  ];

  return (
    <div>
      <div style={{ position: 'fixed', right: '3rem', top: '161px' }}>
        <MemberDialog open={open} onClose={handleClose} />
        <Buttons
          content={
            <>
              <AddIcon sx={{marginLeft: '-0.25rem'}} />
              新增成員
            </>
          }
          contained={true}
          onClick={() => setOpen(true)}
        />
      </div>
      <CustomTable columns={columns} data={data} sx={{marginTop: 8}} />
    </div>

  )

};

export default MemberPage;

import React, { useState } from 'react';
import CustomTable from '../components/Projects/CustomTable';
import Selected from '../components/Shared/Selected';
import Tags from '../components/Shared/Tags';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Buttons from "../components/Shared/Buttons";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import MemberDialog from '../components/Shared/Dialogs/MemberDialog';
const TalentPoolPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const data = [
    {
      "id": "1",
      "name": "張小明",
      "credit_name": "Xiao Ming Chang",
      "account_name": "張小明",
      "bank_name": "台灣銀行",
      "bank_code": "004",
      "branch": "台北分行",
      "discord": "asdfg",
      "instagram": "afds",
      "account_number": "123456789012",
      "suggested_position": ["動畫", "上色"],
      "hope_position": ["構圖", "動畫"],
      "projects": [
        {
          "name": "專案A",
          "position": ["動畫"]
        },
        {
          "name": "專案C",
          "position": ["後製"]
        }
      ],
        "SWIFT_code": "TWNB1234",
        "IBAN_code": "TW123456789012345678",
        "address": "台北市中正區和平西路一段100號"
    },
    {
      "id": "2",
      "name": "李大明",
      "credit_name": "Da Ming Li",
      "account_name": "李大明",
      "bank_name": "台灣銀行",
      "bank_code": "004",
      "branch": "台北分行",
      "discord": "asdfg",
      "instagram": "afds",
      "account_number": "123456789012",
      "suggested_position": ["動畫"],
      "hope_position": ["構圖", "動畫"],
      "projects": [
        {
          "name": "專案A",
          "position": ["動畫", "上色"]
        },
        {
          "name": "專案B",
          "position": ["補間"]
        }
      ],
      "SWIFT_code": "TWNB1234",
      "IBAN_code": "TW123456789012345678",
      "address": "台北市中正區和平西路一段100號"
    },
    {
      "id": "3",
      "name": "王小明",
      "credit_name": "Xiao Ming Wang",
      "account_name": "王小明",
      "bank_name": "台灣銀行",
      "bank_code": "004",
      "branch": "台北分行",
      "discord": "asdfg",
      "instagram": "afds",
      "account_number": "123456789012",
      "suggested_position": ["動畫"],
      "hope_position": ["構圖", "動畫"],
      "projects": [
        {
          "name": "專案A",
          "position": ["動畫"]
        }
      ],
      "SWIFT_code": "TWNB1234",
      "IBAN_code": "TW123456789012345678",
      "address": "台北市中正區和平西路一段100號"
    }
  ]

  const projects = ["專案A", "專案B", "專案C"];

  interface Project {
    name: string;
    position: string[];
  }

  interface TalentData {
    id: string;
    name: string;
    credit_name: string;
    discord: string;
    instagram: string;
    suggested_position: string[];
    hope_position: string[];
    projects: Project[];
    account_name: string;
    bank_name: string;
    bank_code: string;
    branch: string;
    account_number: string;
    SWIFT_code: string;
    IBAN_code: string;
    address: string;
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
    { label: '建議職位', field: 'suggested_position', render: (row: TalentData) => <Selected value={row.suggested_position} /> },
    { label: '期望職位', field: 'hope_position', render: (row: TalentData) => <Selected value={row.hope_position} /> },
    ...projects.map((project) => ({
      label: project,
      render: (row: TalentData) => {
        const projectData = row.projects.find((p) => p.name === project);
        return <Tags positions={projectData?.position || []} />;
      },
    })),
    { label: 'Discord', field: 'discord' },
    { label: 'Instagram', field: 'instagram' },
    { label: '戶名', field: 'account_name' },
    { label: '銀行', field: 'bank_name' },
    { label: '銀行代號', field: 'bank_code' },
    { label: '分行', field: 'branch' },
    { label: '帳號', field: 'account_number' },
    { label: 'SWIFT', field: 'SWIFT_code' },
    { label: 'IBAN', field: 'IBAN_code' },
    { label: '地址', field: 'address' },
  ];

  return (
    <div>
      <div style={{ position: 'fixed', right: '1.5rem', top: '5.5rem' }}>
        <MemberDialog open={open} onClose={handleClose} isFullInfo={true} />
        <Buttons
          content={
            <>
              <AddIcon sx={{marginLeft: '-0.25rem'}} />
              新增人力
            </>
          }
          contained={true}
          onClick={() => setOpen(true)}
        />
      {/* <CustomTable columns={columns} data={data} />; */}
      </div>
      <CustomTable columns={columns} data={data} sx={{marginTop: 8}} />
    </div>

  )

};

export default TalentPoolPage;

import React from 'react';
import CustomTable from '../components/Projects/CustomTable';
import Selected from '../components/Shared/Selected';
import Tags from '../components/Shared/Tags';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Buttons from "../components/Shared/Buttons";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const TalentPoolPage = () => {
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
      "position": "動畫製作師",
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
        "SWIT_code": "TWNB1234",
        "IBAN_code": "TW123456789012345678",
        "address": "台北市中正區和平西路一段100號"
    },
    {
      "id": "2",
      "name": "張小明",
      "credit_name": "Xiao Ming Chang",
      "account_name": "張小明",
      "bank_name": "台灣銀行",
      "bank_code": "004",
      "branch": "台北分行",
      "discord": "asdfg",
      "instagram": "afds",
      "account_number": "123456789012",
      "position": "動畫製作師",
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
      "SWIT_code": "TWNB1234",
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
    projects: Project[];
    account_name: string;
    bank_name: string;
    bank_code: string;
    branch: string;
    account_number: string;
    SWIT_code: string;
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
    { label: '建議職位', render: () => <Selected positionName={["導演"]} /> },
    { label: '期望職位', render: () => <Selected positionName={["導演"]} /> },
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
    { label: 'SWIT', field: 'SWIT_code' },
    { label: 'IBAN', field: 'IBAN_code' },
    { label: '地址', field: 'address' },
  ];

  return (
    <div>
      <div style={{ position: 'fixed', right: '1.5rem', top: '5.5rem' }}>
        <Buttons
          content={
            <>
              <AddIcon sx={{marginLeft: '-0.25rem'}} />
              新增人力
            </>
          }
          contained={true}
        />
      {/* <CustomTable columns={columns} data={data} />; */}
      </div>
      <CustomTable columns={columns} data={data} sx={{marginTop: 8}} />
    </div>

  )

};

export default TalentPoolPage;

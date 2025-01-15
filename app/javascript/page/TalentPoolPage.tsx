import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Buttons from "../components/Shared/Buttons";
import AddIcon from '@mui/icons-material/Add';
import Selected from '../components/Shared/Selected'
import Tags from '../components/Shared/Tags'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#80A4AE",
    color: theme.palette.common.white,
    whiteSpace: "nowrap"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TalentPoolPage = () => {
  const datas = [
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

  const Projects = [ "專案A", "專案B", "專案C" ]

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
      </div>
      <TableContainer sx={{  marginTop: 8}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">姓名</StyledTableCell>
            <StyledTableCell align="left">Credit 顯示姓名</StyledTableCell>
            <StyledTableCell align="left">建議職位</StyledTableCell>
            <StyledTableCell align="left">期望職位</StyledTableCell>
            {
              Projects.map((project, index) => (
                <StyledTableCell key={index} align="left">{project}</StyledTableCell>
              ))
            }
            <StyledTableCell align="left">Discord</StyledTableCell>
            <StyledTableCell align="left">Instagram</StyledTableCell>
            <StyledTableCell align="left">戶名</StyledTableCell>
            <StyledTableCell align="left">銀行</StyledTableCell>
            <StyledTableCell align="left">銀行代號</StyledTableCell>
            <StyledTableCell align="left">分行</StyledTableCell>
            <StyledTableCell align="left">帳號</StyledTableCell>
            <StyledTableCell align="left">SWIT</StyledTableCell>
            <StyledTableCell align="left">IBAN</StyledTableCell>
            <StyledTableCell align="left">地址</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            datas.map((data) => (
              <StyledTableRow key={data.id}>
              <StyledTableCell align="left">{<><EditIcon /><DeleteForeverIcon /></> }</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="left">{data.credit_name}</StyledTableCell>
              <StyledTableCell align="left">{<Selected positionName={["導演"]}/>}</StyledTableCell>
              <StyledTableCell align="left">{<Selected positionName={["導演"]}/>}</StyledTableCell>
              {
                Projects.map((project, index) => {
                  const projectData = data.projects.find((p) => p.name === project);
                  return (
                    <StyledTableCell
                      key={index}
                      align="left"
                      sx={{
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                        padding: '8px',
                      }}
                    >
                      <Tags positions={projectData?.position || []} />                    </StyledTableCell>
                  );
                })
              }
              <StyledTableCell align="left">{data.discord}</StyledTableCell>
              <StyledTableCell align="left">{data.instagram}</StyledTableCell>
              <StyledTableCell align="left">{data.name}</StyledTableCell>
              <StyledTableCell align="left">{data.bank_name}</StyledTableCell>
              <StyledTableCell align="left">{data.bank_code}</StyledTableCell>
              <StyledTableCell align="left">{data.branch}</StyledTableCell>
              <StyledTableCell align="left">{data.account_number}</StyledTableCell>
              <StyledTableCell align="left">{data.SWIT_code}</StyledTableCell>
              <StyledTableCell align="left">{data.IBAN_code}</StyledTableCell>
              <StyledTableCell align="left">{data.address}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TalentPoolPage;

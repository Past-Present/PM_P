import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import Buttons from "../Shared/Buttons"

const PaymentTab = () => {
  const [paymentDate, setPaymentDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(66000); // 假設總金額

  const data = [
    { id: 1, mirror: 'SC01SH020', quantity: 55, task: '動態', unit: '300/秒', price: 16500 },
    { id: 2, mirror: 'SC01SH020', quantity: 5, task: '構圖', unit: '3000/張', price: 16500 },
    { id: 3, mirror: 'SC01SH020', quantity: 55, task: '動態', unit: '300/秒', price: 16500 },
    { id: 4, mirror: 'SC01SH020', quantity: 55, task: '動態', unit: '300/秒', price: 16500 },
  ];

  const datas = [
    {
      "id": 1,
      "name": "張小明",
      "email": "xiaoming@example.com",
      "phone": '111111111',
      "discord": "xiaoming#1234",
      "instagram": "xiaoming_art",
      "credit_name": "Xiao Ming Chang",
      "address": "台北市中正區和平西路一段100號",
      "account_name": "張小明",
      "bank_name": "台灣銀行",
      "bank_code": "004",
      "branch": "台北分行",
      "account_number": "123456789012",
      "SWIFT_code": "TWNB1234",
      "IBAN_code": "TW123456789012345678",
      "project": {
        "id": 1,
        "name_tw": "專案A",
        "name_en": "Project A",
        "artist_roles": [
          {
            "work_item_id": 1,
            "work_item_name": "動畫",
            "unit": "秒"
          },
          {
            "work_item_id": 2,
            "work_item_name": "上色",
            "unit": "張"
          }
        ]
      },
      "tasks": [
        {
          "id": 1,
          "work_item_name": "動畫",
          "status": "completed",
          "frames": 120,
          "shots": [
            {
              "shot_id": 1,
              "shot_number": 1,
              "frames": 60,
              "difficulty": 5,
              "price": 3000,
            },
            {
              "shot_id": 2,
              "shot_number": 2,
              "frames": 60,
              "difficulty": 3,
              "price": 2000,
            }
          ]
        },
        {
          "id": 2,
          "work_item_id": 2,
          "work_item_name": "上色",
          "status": "completed",
          "frames": 50,
          "shots": [
            {
              "shot_id": 3,
              "shot_number": 3,
              "frames": 50,
              "difficulty": 4,
              "price": 1500,
            }
          ]
        }
      ]
    }
  ];

  const [selectedArtist, setSelectedArtist] = useState(datas[0]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        專案A 出款單
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          border: '1px solid #ccc',
          padding: 2,
          marginBottom: 4,
        }}
      >
        <Box>
          <Typography>藝術家</Typography>
          <Select
            value={selectedArtist.id}
            onChange={(e) => {
              const artist = datas.find((artist) => artist.id === e.target.value);
              setSelectedArtist(artist);
            }}
            fullWidth
          >
            {datas.map((artist) => (
              <MenuItem key={artist.id} value={artist.id}>
                {artist.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box>
          <Typography>出款日</Typography>
          <TextField
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            fullWidth
          />
        </Box>
        <Box>
          <Typography>Email: {selectedArtist.email}</Typography>
          <Typography>電話: {selectedArtist.phone}</Typography>
        </Box>
        <Box>
          <Typography>銀行名稱: {selectedArtist.bank_name}</Typography>
          <Typography>分行: {selectedArtist.branch}</Typography>
          <Typography>帳號: {selectedArtist.account_number}</Typography>
          <Typography>SWIFT: {selectedArtist.SWIFT_code}</Typography>
          <Typography>IBAN: {selectedArtist.IBAN_code}</Typography>
        </Box>

      </Box>

      {/* 中間資料表 */}
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>鏡頭</TableCell>
              <TableCell>數量</TableCell>
              <TableCell>工作項目</TableCell>
              <TableCell>單價</TableCell>
              <TableCell>價格</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.mirror}</TableCell>
                <TableCell>{task.quantity}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.unit}</TableCell>
                <TableCell>{task.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 總金額 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderTop: '1px solid #ccc',
          paddingTop: 2,
        }}
      >
        <Typography variant="h6">加總: {totalAmount}</Typography>
      </Box>
      <div className='text-center'>
        <Buttons
          content="下載 PDF"
          contained={true}
        />
      </div>
    </Box>
  );
};

export default PaymentTab;

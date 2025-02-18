import React, { useState } from 'react';
import CustomTable from './CustomTable';
import Selected from '../Shared/Selected';
import Tags from '../Shared/Tags';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Buttons from "../Shared/Buttons";
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterDialog from '../Shared/Dialogs/FilterDialog';

const ShotPage = () => {
  const [open, setOpen] = useState(false);
  const [artist, setArtist] = useState("");
  const [option, setOption] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [label, setLabel] = useState<string>("");
  const [showArtist, setShowArtist] = useState<boolean>(false);
  const data = [
    {
      "id": 1,
      "number": 1,
      "shot_number": "SC01SH020",
      "preview_url": "asdfg",
      "frames": 50,
      "priority": 1,
      "difficulty": 5,
      "update": "",
      "task-layout": {
        artist: "aaa",
        status: 'completed'
      },
      'task-animaion': {
        artist: "aaa",
        status: 'completed'
      }
    },
    {
      "id": 2,
      "number": 2,
      "shot_number": "SC01SH020",
      "preview_url": "asdfg",
      "frames": 22,
      "priority": 3,
      "difficulty": 5,
      "update": "",
      "task-layout": {
        artist: "bbb",
        status: 'completed'
      },
      'task-animaion': {
        artist: "aaa",
        status: 'completed'
      }
    }
  ]

  const columns = [
    { label: '編號', field: 'number' as const },
    { label: '鏡頭', field: 'shot_number' as const },
    { label: '預覽', field: 'preview_url' as const },
    { label: '影格數', field: 'frames' as const },
    {
      label:
        <div className='flex items-center'>
        優先度
        <IconButton
          sx={{ color: 'white'}}
          onClick={() => {
            setOpen(true);
            setOptions([...Array(5)].map((_, i) => (i + 1).toString()));
            setLabel("優先度");
          }}
        >
          <FilterAltIcon />
        </IconButton>
        </div>,
      field: 'priority' as const
    },
    {
      label:
        <div className='flex items-center'>
      難易度
      <IconButton
          sx={{ color: 'white'}}
          onClick={() => {
            setOpen(true);
            setOptions([...Array(5)].map((_, i) => (i + 1).toString()));
            setLabel("難易度");
          }}><FilterAltIcon /></IconButton>
      </div>,
      field: 'difficulty' as const
    },
    { label: '上傳', field: 'update' as const },
    { label:
      <div className='flex items-center'>
        構圖｜2/33｜2% <IconButton
          sx={{ color: 'white'}}
          onClick={() => {
            setOpen(true);
            setOptions(['準備中', '可開始', '進行中', '待審核', '退修' ,'完成']);
            setLabel("狀態");
            setShowArtist(true);
          }}><FilterAltIcon /></IconButton>
        </div>,
      render: () =>
        <div className='flex'>
          <Selected
            isPosition={false}
            value={["aaa"]}
            options={["aaa", 'bbb', 'ccc']}
          />
          <Selected
            isPosition={false}
            isMultiple={false}
            value={["完成"]}
          />
        </div>,
      align: 'center'
    },
    {
      label:
        <div className='flex items-center'>
          動畫｜2/33｜2% <IconButton sx={{ color: 'white'}} onClick={() => {
            setOpen(true);
            setShowArtist(true);
            setOptions(['準備中', '可開始', '進行中', '待審核', '退修' ,'完成']);
            setLabel("狀態");
          }}><FilterAltIcon /></IconButton>
        </div>,
      render: () =>
        <div className='flex'>
          <Selected
            isPosition={false}
            value={["aaa"]}
            isMultiple={false}
            options={["aaa", 'bbb', 'ccc']}
          />
          <Selected
            isPosition={false}
            isMultiple={false}
            value={["完成"]}
          />
        </div>,
      align: 'center'
    },
  ];

  return (
    <div>
      <FilterDialog
        open={open}
        onClose={() => setOpen(false)}
        options={options}
        option={option}
        setOption={setOption}
        artist={artist}
        setArtist={setArtist}
        label={label}
        showArtist={showArtist}
      />
      <div style={{ position: 'fixed', right: '3rem', top: '161px' }}>
        <Buttons
          content={
            <>
              <EditIcon sx={{marginLeft: '-0.25rem'}} />
              編輯任務
            </>
          }
          contained={true}
        />
      </div>
      <CustomTable<{
        id: number;
        number: number;
        shot_number: string;
        preview_url: string;
        frames: number;
        priority: number;
        difficulty: number;
        update: string;
        'task-layout': {
          artist: string;
          status: string;
        };
        'task-animaion': {
          artist: string;
          status: string;
        };
      }> columns={columns.map(col => ({
        ...col,
        align: col.align === 'center' ? 'center' : undefined
      }))} data={data} sx={{marginTop: 8}} />
    </div>

  )

};

export default ShotPage;

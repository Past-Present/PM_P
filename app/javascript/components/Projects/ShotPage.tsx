import React from 'react';
import CustomTable from './CustomTable';
import Selected from '../Shared/Selected';
import Tags from '../Shared/Tags';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Buttons from "../Shared/Buttons";
import IconButton from '@mui/material/IconButton';

const ShotPage = () => {
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
    { label: '編號', field: 'number' },
    { label: '鏡頭', field: 'shot_number' },
    { label: '預覽', field: 'preview_url' },
    { label: '影格數', field: 'frames' },
    { label: '優先度', field: 'priority' },
    { label: '難易度', field: 'difficulty' },
    { label: '上傳', field: 'update' },
    { label: '構圖｜2/33｜2%', render: () =>
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
      </div>
    },
    { label: '動畫｜2/33｜2%', render: () =>
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
      </div>
    },

  ];

  return (
    <div>
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
      <CustomTable columns={columns} data={data} sx={{marginTop: 8}} />
    </div>

  )

};

export default ShotPage;

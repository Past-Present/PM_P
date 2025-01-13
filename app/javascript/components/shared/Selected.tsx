import { useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  '導演',
  '構圖',
  '美術',
  '原畫',
  '動畫',
  '補間',
  '上色',
  '音樂',
  '後製',
  '背景',
];

// 定義選項對應的背景顏色
const backgroundColors: { [key: string]: string } = {
  '導演': '#ffe0b2',
  '構圖': '#c8e6c9',
  '美術': '#bbdefb',
  '原畫': '#ffcdd2',
  '動畫': '#d1c4e9',
  '補間': '#f0f4c3',
  '上色': '#b2ebf2',
  '音樂': '#ffccbc',
  '後製': '#d7ccc8',
  '背景': '#f8bbd0',
};

interface PositionProps {
  positionName?: string[];
}

const MultipleSelectChip = ({ positionName }: PositionProps) => {
  const theme = useTheme();
  const [position, setPosition] = useState<string[]>(positionName || []);

  const handleChange = (event: SelectChangeEvent<typeof position>) => {
    const {
      target: { value },
    } = event;
    setPosition(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={position}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    backgroundColor: backgroundColors[value] || 'default',
                    color: 'black',
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectChip;
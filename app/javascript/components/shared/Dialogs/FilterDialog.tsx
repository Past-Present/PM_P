import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Buttons from '../Buttons';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
interface FilterDialogProps {
  options: string[];
  option: string;
  setOption: (options: string) => void;
  artist?: string;
  setArtist?: (artist: string) => void;
  showArtist: boolean;
  open: boolean;
  onClose: () => void;
  label: string;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ open, onClose, options, option, setOption, artist, setArtist, label, showArtist }) => {
  const Artists = [
    { id: 1, name: '張小明' },
    { id: 2, name: '李大明' },
    { id: 3, name: '王小明' },
  ]

  const handleClose = () => {
    setArtist?.("");
    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent sx={{ display: 'flex', gap: '1rem' }}>
        {
          showArtist && (
            <FormControl fullWidth>
              <InputLabel id="artist-select-label">藝術家</InputLabel>
              <Select
                labelId="artist-select-label"
                label="藝術家"
                value={artist}
                onChange={(e) => setArtist?.(e.target.value)}
                fullWidth
            >
              {Artists.map((artist) => (
                <MenuItem key={artist.id} value={artist.id}>
                  {artist.name}
                </MenuItem>
              ))}
                </Select>
          </FormControl>
          )
        }
        <FormControl fullWidth>
          <InputLabel id="options-select-label">{label}</InputLabel>
          <Select
            labelId="options-select-label"
            label={label}
            value={option}
            onChange={(e) => setOption(e.target.value)}
            fullWidth
          >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Buttons content="取消" onClick={handleClose} />
        <Buttons content="確定" contained={true} onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;

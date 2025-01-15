import React, { useEffect, useState } from "react";
import Buttons from "../Shared/Buttons"
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

const AnnouncementPage = () => {
  const projects = [{name: "專案A"}, {name: "專案B"}, {name: "專案C"}]
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <>
      <div className="flex justify-end">
        <Buttons
          content={
            <>
              <AddIcon sx={{marginLeft: '-0.25rem'}} />
              新增公告
            </>
          }
          contained={true}
        />
      </div>
      公告
    </>
  );
};

export default AnnouncementPage;

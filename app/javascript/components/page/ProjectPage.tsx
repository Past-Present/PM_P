import React, { useEffect, useState } from "react";
import Buttons from "../shared/Buttons"
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ProjectsPage = () => {
  const projects = [{name: "專案A"}, {name: "專案B"}]
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <>
      <div className="flex justify-end">
        <Buttons
          content={
            <>
              <AddIcon sx={{marginLeft: '-0.25rem'}} />
              新增專案
            </>
          }
          contained={true}
        />
      </div>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
        }}
      >
        {
          projects.map((project, index) => (
            <Card key={index}>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  height: '100%',
                  '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                      backgroundColor: 'action.selectedHover',
                    },
                  },
                }}
              >
                <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </>
  );
};

export default ProjectsPage;

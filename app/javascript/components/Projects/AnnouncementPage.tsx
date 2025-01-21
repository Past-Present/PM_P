import React, { useEffect, useState } from "react";
import Buttons from "../Shared/Buttons"
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';

const AnnouncementPage = () => {
  const datas = [
    {
      id: 1,
      title: "標題一",
      content: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 2,
      title: "標題二",
      content: "標題二標題二標題二標題二標題二body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 3,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 4,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 5,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 6,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 7,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    },
    {
      id: 8,
      title: "標題三",
      content: "三三三三三三三body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
      created_at: '2024-01-02'
    }
  ]

  const [selectedCard, setSelectedCard] = useState(datas[0]);



  return (
    <div>
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
      <Box
        sx={{
          width: '100%',
          maxWidth: '90vw',
          height: '120px',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          padding: 2,
        }}
      >
        {
          datas.map((data, index) => (
            <Card
              key={data.id}
              sx={{
                flex: '0 0 auto',
                width: '200px',
                marginRight: 2,
              }}
            >
              <CardActionArea
                onClick={() => setSelectedCard(data)}
                data-active={selectedCard?.id === data.id ? '' : undefined}
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
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 1
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {data.created_at}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {data.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
      <Divider />
      <Box sx={{ mt: 4 }}>
        {selectedCard ? (
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="div" gutterBottom>
              {selectedCard.title}
            </Typography>
            <Typography variant="overline" color="text.primary">
              {selectedCard.created_at}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {selectedCard.content}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="div" gutterBottom>
              {datas[0].title}
            </Typography>
            <Typography variant="overline" color="text.primary">
              {datas[0].created_at}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {datas[0].content}
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default AnnouncementPage;

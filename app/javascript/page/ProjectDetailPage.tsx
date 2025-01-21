import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AnnouncementPage from "../components/Projects/AnnouncementPage"
import MemberPage from "../components/Projects/MemberPage"
import PaymentPage from "../components/Projects/PaymentPage"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProjectDetailPage = ({ setCurrentProjectId }: { setCurrentProjectId: (id: string) => void }) => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      setCurrentProjectId(id);
    }
  }, [id, setCurrentProjectId]);
  const [project, setProject] = useState<{ id: string; name: string } | null>(null);

  const projectData = [
    { id: '1', name: '專案A', details: '這是專案A的詳細資料' },
    { id: '2', name: '專案B', details: '這是專案B的詳細資料' },
    { id: '3', name: '專案C', details: '這是專案C的詳細資料' },
  ];


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="公告" {...a11yProps(0)} />
          <Tab label="時程" {...a11yProps(1)} />
          <Tab label="鏡頭" {...a11yProps(2)} />
          <Tab label="成員" {...a11yProps(3)} />
          <Tab label="預算" {...a11yProps(4)} />
          <Tab label="出款" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AnnouncementPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        <MemberPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <PaymentPage />
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectDetailPage;

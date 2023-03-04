import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Predictions from './prediction/Predictions';
import Treatments from './treatment/Treatments.js';
import Trials from './trial/Trials';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard-box'>
      <Box sx={{ width: '100%', borderStyle: 'solid', padding: 1}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab 
              sx={{ marginRight: 10, textTransform: 'none', fontSize: 15, color: '#000'}} 
              label="Personalized health risk prediction" {...a11yProps(0)} wrapped />
            <Tab 
              sx={{ marginRight: 10, textTransform: 'none', fontSize: 15, color: '#000'}} 
              label="Treatment benefits & risks" {...a11yProps(1)} wrapped />
            <Tab 
              sx={{ textTransform: 'none', fontSize: 15, color: '#000' }} 
              label="Clinical trial access" {...a11yProps(2)} wrapped />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Predictions />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Treatments />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Trials />
        </TabPanel>
      </Box>
    </div>
  );
}

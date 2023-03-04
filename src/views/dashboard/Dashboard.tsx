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
  const [tab, setTab] = React.useState(0);
  const [treatmentId, setTreatmentId] = React.useState(null);

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handlePredictionPageTreatmentSelection = (treatmentId) => {
    setTab(1);
    setTreatmentId(treatmentId);
  }

  const handleTreatmentPageTrialLinkClick = () => {
    setTab(2);
  }

  const handleTreatmentChange = (treatmentId) => {
    setTreatmentId(treatmentId);
  }

  return (
    <div className='dashboard-box'>
      <Box sx={{ width: '100%', borderStyle: 'solid', padding: 1}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={onTabChange} aria-label="basic tabs example" centered>
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
        <TabPanel value={tab} index={0}>
          <Predictions handlePredictionPageTreatmentSelection={handlePredictionPageTreatmentSelection}/>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Treatments treatmentId={treatmentId}  handleTreatmentPageTrialLinkClick={handleTreatmentPageTrialLinkClick} handleTreatmentChange={handleTreatmentChange}/>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Trials treatmentId={treatmentId} handleTreatmentChange={handleTreatmentChange}/>
        </TabPanel>
      </Box>
    </div>
  );
}

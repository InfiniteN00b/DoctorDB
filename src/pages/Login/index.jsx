import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ULogin from '../../components/ULogin';
import USignUp from '../../components/USignUp';

function SignInOutPage({tab}) {
  const [value, setValue] = useState(tab);

  React.useEffect(() => {
    setValue(tab);
  }, [tab])

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
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

  return (
    <div className='Main' style={{alignSelf: 'center', alignItems : 'center'}}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" variant='fullWidth'>
        <Tab label="Login" />
        <Tab label="SignUp" />
      </Tabs>
      <TabPanel  value={value} index={0}>
        <ULogin />
      </TabPanel>
      <TabPanel  value={value} index={1}>
        <USignUp />
      </TabPanel>
    </div>
  );
}

export default SignInOutPage;
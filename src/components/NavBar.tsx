// src/components/NavBar.tsx

"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { useRouter } from 'next/navigation';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          switch (newValue) {
            case 0:
                router.push('/'); 
                break;
            case 1:
                router.push('/profil');
                break;
            case 2:
                router.push('/prispevok'); 
                break;
            case 3:
                router.push('/auth/prihlasenie'); 
                break;
            case 4:
                router.push('/auth/registracia'); 
                break;
            default:
              break;
          }
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" icon={<Person2Icon/>} />
        <BottomNavigationAction label="Prispevky" icon={<AddCircleIcon />} />
        <BottomNavigationAction label="Prihlasenie" icon={<LoginIcon />} />
        <BottomNavigationAction label="Registracia" icon={<AppRegistrationIcon/>} />
      </BottomNavigation>
    </Box>
  );
}

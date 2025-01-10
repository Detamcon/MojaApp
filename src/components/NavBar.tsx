"use client";

import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';

import { useRouter } from "next/navigation"; 
import { useSession } from "next-auth/react"; 
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const [value, setValue] = useState("/");
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname(); 


  useEffect(() => {
    setValue(pathname); 
  }, [pathname]);


  useEffect(() => {
    if (status === "authenticated") {
      router.push("/prispevok");  
    }
  }, [status, router]);

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };


  const privatePaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    { label: "Prispevky", value: "/prispevok", icon: <DashboardIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> }, // Logout
  ];

  const publicPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "gdpr", value: "/gdpr", icon: <InfoIcon /> },
    { label: "Omne", value: "/o-mne", icon: <InfoIcon /> },
    { label: "Registracia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];


  const navigationPaths = status === "authenticated" ? privatePaths : publicPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

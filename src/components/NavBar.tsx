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

import { useRouter } from "next/navigation"; // Router for navigation
import { useSession } from "next-auth/react"; // To track session state
import { usePathname } from 'next/navigation'; // To get the current pathname

export default function Navbar() {
  const [value, setValue] = useState("/");
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname(); // This gives the current path

  // Update the active navigation state when the route changes
  useEffect(() => {
    setValue(pathname); // Update the active value when pathname changes
  }, [pathname]); // Watch for changes in pathname

  // Redirect to a different page after sign-in
  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to the private dashboard or profile page
      router.push("/prispevok");  // You can change this to any page you'd like
    }
  }, [status, router]);

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue); // Navigate to the new page
  };

  // Paths for authenticated users (private paths)
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

  // Paths for non-authenticated users (public paths)
  const publicPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "gdpr", value: "/gdpr", icon: <InfoIcon /> },
    { label: "Omne", value: "/o-mne", icon: <InfoIcon /> },
    { label: "Registracia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Select paths based on user authentication status
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

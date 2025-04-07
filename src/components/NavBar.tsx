"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from "next/navigation"; 
import { useSession } from "next-auth/react"; 
import { usePathname } from 'next/navigation'; 

type NavItem = {
  label: string;
  icon: JSX.Element;
} & (
  | { value: string; onClick?: never }
  | { value?: never; onClick: (event: MouseEvent<HTMLElement>) => void }
);

export default function Navbar() {
  const [value, setValue] = useState("/");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); // Ensure this is typed as HTMLElement | null
  const [openMenu, setOpenMenu] = useState(false); // State for menu visibility
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname(); 

  useEffect(() => {
    setValue(pathname ?? ""); // Provide a fallback empty string if pathname is null
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

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); // Prevent navigation when the profile icon is clicked
    setAnchorEl(event.currentTarget); // Ensure this is correctly typed as HTMLElement
    setOpenMenu(true); // Open the dropdown when profile is clicked
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false); // Close the dropdown
  };

  const handleProfile = () => {
    router.push("/profil"); // Navigate to Profile
    handleMenuClose();
  };

  const handleLogout = () => {
    router.push("/auth/odhlasenie"); // Navigate to logout
    handleMenuClose();
  };

  const privatePaths: NavItem[] = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    { label: "Prispevky", value: "/prispevok", icon: <DashboardIcon /> },
    {
      label: "Profil",
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
      onClick: handleProfileClick, // Ensure only the dropdown opens
    },
  ];

  const publicPaths: NavItem[] = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nas", value: "/o-nas", icon: <InfoIcon /> },
    { label: "Registracia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  const navigationPaths = status === "authenticated" ? privatePaths : publicPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.label}
            label={path.label}
            value={typeof path.value === "string" ? path.value : ""} // Ensure value is a string, fallback to an empty string
            icon={path.icon}
            onClick={path.onClick || undefined} // Add onClick only if defined
          />
        ))}
      </BottomNavigation>
      
      {/* Menu for Profile options */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

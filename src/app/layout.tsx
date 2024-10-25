// src/app/layout.tsx

import './globals.css';
import NavBar from '@/components/NavBar'; // Import the NavBar component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar /> {/* Add the NavBar at the bottom */}
      </body>
    </html>
  );
}

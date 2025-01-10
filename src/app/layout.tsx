// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider";


export const metadata: Metadata = {
  title: "My Website",
  description: "A simple Next.js app with theme switching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          <ThemeProvider>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >

              <header style={{ padding: "1rem", backgroundColor: "inherit" }}>
              </header>
              <main style={{ flexGrow: 1 }}>{children}</main>

              <footer>
                <Navbar />
              </footer>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/widgets/styles/globals.css";
import Navbar from "@/widgets/shared-components/Navbar";
import { AuthProvider } from "@/entities/player/model/AuthContext";
import { TeamProvider } from "@/entities/team/model/TeamContext";

export const metadata: Metadata = {
  title: "WoT Competetive 2.0",
  description: "version 0.2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel='icon' type='image/x-icon' href='/images/logo.png' />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        <AuthProvider>
          <TeamProvider>
            <div className="flex">
              <div>
                <Navbar />
              </div>
              <div className={`
                flex-1 
                bg-[url('/images/bg.jpg')]  
                bg-cover 
                bg-center 
                bg-no-repeat
              `}>
                {children}
              </div>
            </div>
          </TeamProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

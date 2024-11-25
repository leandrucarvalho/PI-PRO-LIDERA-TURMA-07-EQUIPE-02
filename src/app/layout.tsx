import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "../../contexts/user-context";


const balooFont = localFont({
  src: "./fonts/BalooPaaji2-VariableFont_wght.ttf",
  variable: "--font-baloo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PRO Lidera Skills",
  description:
    "Tenha a avaliação de suas habilidades de liderança através de um teste especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${balooFont.variable}  antialiased h-auto`}>
        <UserProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

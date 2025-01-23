import { Inter } from "next/font/google";
import "./globals.css";
import DisplayContext from "./Helpers/DisplayNavContext";
import LayoutStructure from "./Helpers/LayoutStructure";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban-Task-Manager",
  description: "A simple task manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        {children}   
      </body>
    </html>
  );
}

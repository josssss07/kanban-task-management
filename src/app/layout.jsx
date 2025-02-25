import { Inter } from "next/font/google";
import "./globals.css";
import DisplayContext from "./Helpers/DisplayNavContext";
import LayoutStructure from "./Helpers/LayoutStructure";
import Landing from "./Pages/Landing";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban-Task-Manager",
  description: "A task managment platfrom",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full p-0 m-0 box-border">
      <body>
        {children}
      </body>
    </html>
  );
}

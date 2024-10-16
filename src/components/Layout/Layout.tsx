import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="body-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

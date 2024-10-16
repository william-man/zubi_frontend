import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="body-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

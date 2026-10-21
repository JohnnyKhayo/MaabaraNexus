import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </>
  );
}
export default Layout
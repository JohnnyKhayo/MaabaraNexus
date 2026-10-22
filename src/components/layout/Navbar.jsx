import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);        // profile dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // hamburger

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-primary">
          MaabaraLabs
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>

          {user ? (
            // show dashboard/samples to admin/staff + profile
            <>
            {/* role checks */}
              {(user.role === "staff" || user.role === "admin") && (
                <>
                  <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
                  <Link to="/samples" className="hover:text-primary">Samples</Link>
                </>
              )}

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)} // toggle profile(e)
                  className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-slate-50">
                  <FiUser className="text-lg"/>
                </button>
                {/* profile dropdown whereby only appears when open=true */}
                {open && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white py-2 shadow-lg">
                    <div className="border-b px-4 py-2">
                      <p className="font-medium">{user.name || "User"}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                      <p className="mt-1 text-xs capitalize text-primary">{user.role}</p>
                    </div>

                    <button
                      onClick={() => {
                        logout();
                        setOpen(false); // logout(e)
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            // show Login & register buttons
            <div className="flex items-center gap-3">
              <Link to="/login" className="rounded-md border border-primary px-3 py-1.5 text-primary hover:bg-primary/5">
                Login
              </Link>
              <Link to="/register" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Hamburger*/}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)} // toggle hamburger
>
          {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu= only shows when humburger is clicked */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
        <div className="flex flex-col gap-4 text-sm">
      <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-primary">Home</Link>
      <Link to="/services" onClick={() => setMobileOpen(false)} className="hover:text-primary">Services</Link>
      <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-primary">About</Link>
      <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-primary">Contact</Link>

{/* checks user role on mobile menu */}
      {user && (user.role === "staff" || user.role === "admin") && (
        <>
          <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="hover:text-primary">Dashboard</Link>
          <Link to="/samples" onClick={() => setMobileOpen(false)} className="hover:text-primary">Samples</Link>
        </>
      )}

      {/* User section(only shows details when clicked) */}
      {user ? (
        <div className="border-t pt-3">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-left">
            <FiUser className="text-lg" />
            <span>Account</span>
          </button>

          {open && (
            <div className="mt-2 pl-6">
              <p className="font-medium">{user.name || "User"}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                  setOpen(false);
                }}
                className="mt-2 text-sm text-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 border-t pt-3">
          <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-md border border-primary px-3 py-1.5 text-center text-primary">
            Login
          </Link>
          <Link to="/register" onClick={() => setMobileOpen(false)} className="rounded-md bg-primary px-3 py-1.5 text-center text-primary-foreground">
            Register
          </Link>
        </div>
      )}
    </div>
  </div>
)}
    </header>
  );
}
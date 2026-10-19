import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-primary">
          MaabaraNexus
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>

          {user ? (
            <>
              {(user.role === "staff" || user.role === "admin") && (
                <>
                  <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
                  <Link to="/samples" className="hover:text-primary">Samples</Link>
                  </>
              )}

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-slate-50">
                  <FiUser className="text-lg" />
                </button>

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
                        setOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-md border border-primary px-3 py-1.5 text-primary hover:bg-primary/5"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">
                Register
              </Link>
            </div>
            
          )}
        </nav>
      </div>
    </header>
  );
}
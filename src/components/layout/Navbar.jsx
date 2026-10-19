import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-primary">
          MaabaraNexus
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-primary">Home</Link>
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
              <button onClick={logout} className="hover:text-primary">
                Logout
              </button>
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
                className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
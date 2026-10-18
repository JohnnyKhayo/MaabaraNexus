import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-primary">
          MaabaraNexus
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/samples" className="hover:text-primary">Samples</Link>
          <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>

          {user ? (
            <>
              <span className="text-muted-foreground">
                {user.name} ({user.role})
              </span>
              <button onClick={logout} className="hover:text-primary">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-primary">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar
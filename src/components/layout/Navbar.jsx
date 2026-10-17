import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-primary">
          SampleNexus
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/samples" className="hover:text-primary">Samples</Link>
          <Link to="/login" className="hover:text-primary">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
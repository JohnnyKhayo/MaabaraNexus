import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    
      try {
      await login(email, password);
      navigate("/samples");
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/invalid-credential") {
        setError("No account found with this email or wrong password.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2" required/>
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2" required/>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit" className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground">
          Login
        </button>
      </form>
    
    
     <p className="mt-4 text-center text-sm"> Don’t have an account?{" "}
      <Link to="/register" className="text-primary hover:underline"> Register </Link> </p>
    </div>
  );
}